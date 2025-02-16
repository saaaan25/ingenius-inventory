// src/components/ClassRoom.jsx
import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const ClassRoom = ({ nombre, profesor }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md p-4 flex flex-col justify-between" style={{ height: '200px', width: '90%' }}>
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