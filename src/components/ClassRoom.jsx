import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ClassRoom = ({ id, nombre, profesor }) => {
    const navigate = useNavigate();

    const goToClassroom = () => {
        navigate(`/classrooms/${id}`);
    };

    return (
        <div 
            className="relative bg-white rounded-lg shadow-md p-4 flex flex-col justify-between cursor-pointer"
            style={{ height: '200px', width: '90%' }}
            onClick={goToClassroom}  
        >
            <div>
                <h2 className="text-lg font-semibold">{nombre}</h2>
                <p className="text-sm text-gray-600">{profesor}</p>
            </div>
            <div className="absolute top-4 right-4 cursor-pointer">
                <FaEllipsisV />
            </div>
        </div>
    );
};

export default ClassRoom;
