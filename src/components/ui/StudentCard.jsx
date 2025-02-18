import { Card } from "@/components/ui/card.jsx";
import { HiX } from "react-icons/hi"; // Icono de eliminación
import PropTypes from "prop-types";

const StudentCard = ({ student, index, onDelete }) => {
    return (
        <Card className="w-full flex justify-between items-center bg-button text-button py-4 px-6">
            {/* Muestra el número del estudiante basado en el índice (comienza en 1) */}
            <span className="ml-5 font-bold text-base">{index}</span>

            {/* Contenedor para el nombre con espacio adecuado entre el índice y el nombre */}
            <div className="flex-1 ml-70 text-left">
                <span className="font-normal text-base">
                    {student.nombre} {student.apellido}
                </span>
            </div>

            {/* Botón de eliminación */}
            <button onClick={() => onDelete(student.id)} className="text-black hover:text-red-700">
                <HiX />
            </button>
        </Card>


    );
};

StudentCard.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        apellido: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired, // Índice para el número del estudiante
    onDelete: PropTypes.func.isRequired,
};

export default StudentCard;
