import PropTypes from 'prop-types';
import { FaEllipsisV } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '@/api/userApi.js';

const ClassRoom = ({ id, nombre, profesorId, classRoom, color, onDelete, onEdit }) => {
    const navigate = useNavigate();
    const [showPopover, setShowPopover] = useState(false);
    const [nombreProfesor, setNombreProfesor] = useState("Cargando...");
    console.log(classRoom.user_id)
    console.log(id)
    console.log(profesorId)
    console.log

    useEffect(() => {
        const fetchProfesor = async () => {
            if (!profesorId.id) {
                setNombreProfesor("Sin asignar");
                return;
            }
            
            try {
                const profesor = await getUser(profesorId.id);
                console.log(profesor)
                if (profesor.role === "profesor") {
                    console.log("si es")
                    setNombreProfesor(`${profesor.name} ${profesor.last_name}`);
                } else {
                    setNombreProfesor("Sin asignar");
                }
            } catch (error) {
                console.error("Error al obtener el profesor:", error);
                setNombreProfesor("Sin asignar");
            }
        };

        fetchProfesor();
    }, [profesorId]);

    const goToClassroom = () => {
        navigate(`/classrooms/${classRoom.classroom_id}`);
    };

    return (
        <div 
            className="relative rounded-lg shadow-md p-4 flex flex-col justify-between cursor-pointer"
            style={{ height: '200px', width: '90%', backgroundColor: color }}
            onClick={goToClassroom}
        >
            <div>
                <h2 className="text-lg font-semibold">{nombre}</h2>
                <p className="text-sm text-gray-600">{nombreProfesor}</p>
            </div>

            <div 
                className="absolute top-4 right-4 cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    setShowPopover(!showPopover);
                }}
            >
                <FaEllipsisV />
            </div>

            {showPopover && (
                <div className="absolute top-10 right-4 bg-white border rounded shadow-md p-2 z-10">
                    <button 
                        className="block text-left px-4 py-2 text-sm hover:bg-gray-100 w-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowPopover(false);
                            onEdit(classRoom.id);
                        }}
                    >
                        Editar
                    </button>
                    <button 
                        className="block text-left px-4 py-2 text-sm hover:bg-red-100 text-red-600 w-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowPopover(false);
                            onDelete(classRoom.id);
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    );
};

ClassRoom.propTypes = {
    id: PropTypes.any.isRequired,
    nombre: PropTypes.string.isRequired,
    profesorId: PropTypes.number.isRequired,
    classRoom: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ClassRoom;
