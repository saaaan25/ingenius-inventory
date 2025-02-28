import { useState } from 'react';
import { classes } from '../data-test/class.js';
import users from '../data-test/users.js';
import ClassRoom from '../components/deliveries/ClassRoom.jsx';
import { AddButton } from '@/components/button/AddButton.jsx';
import PageRoute from '@/components/PageRoute.jsx';
import { AcceptButton } from '@/components/button/AcceptButton.jsx';
import { CancelButton } from '@/components/button/index.js';

const pastelColors = [
    "#FFD1DC", // Rosa claro
    "#FFECB3", // Amarillo claro
    "#C8E6C9", // Verde menta
    "#BBDEFB", // Azul cielo
    "#D1C4E9", // Lila pastel
    "#FFCCBC"  // Naranja suave
];

const Deliveries = () => {
    const page = { name: "Salones", route: "/deliveries" };

    const [classrooms, setClassrooms] = useState(classes.map((c, index) => ({
        ...c,
        color: pastelColors[index % pastelColors.length]
    })));

    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [newClassName, setNewClassName] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [editingClassId, setEditingClassId] = useState(null);

    const teachers = users.filter(user => user.rol === "profesor");

    const handleAddClassroom = () => {
        if (newClassName && selectedTeacher) {
            const newClass = {
                classroom_id: classrooms.length + 1,
                name: newClassName,
                teacher: selectedTeacher,
                color: pastelColors[classrooms.length % pastelColors.length] // Asigna en orden
            };
            setClassrooms([...classrooms, newClass]);
            setShowModal(false);
            setNewClassName('');
            setSelectedTeacher(null);
        }
    };

    const handleDeleteClassroom = (id) => {
        setClassrooms(classrooms.filter(c => c.classroom_id !== id));
    };

    const handleEditClassroom = (id) => {
        setIsEdit(true);
        setEditingClassId(id);
        setShowModal(true);
    };

    const handleSaveEdit = () => {
        setClassrooms(classrooms.map(c =>
            c.classroom_id === editingClassId ? { ...c, teacher: selectedTeacher } : c
        ));
        setShowModal(false);
        setIsEdit(false);
        setSelectedTeacher(null);
    };

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <PageRoute page1={page} />
            <div className="pl-5">
                <h1 className="font-semibold text-xl">Salones</h1>
            </div>
            <div className="flex justify-between w-full px-5">
                <div></div>
                <AddButton onClick={() => { setShowModal(true); setIsEdit(false); }}>Agregar Salón</AddButton> 
            </div>
            <div className="flex flex-col w-full h-full p-6">
                <div className="grid grid-cols-3 gap-6">
                    {classrooms.map((classRoom) => (
                        <ClassRoom 
                            key={classRoom.classroom_id} 
                            id={classRoom.classroom_id} 
                            nombre={classRoom.name} 
                            profesorId={classRoom.teacher} 
                            color={classRoom.color} 
                            onDelete={handleDeleteClassroom} 
                            onEdit={handleEditClassroom}
                        />
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30">
                    <div className="relative bg-white p-8 rounded-lg w-[600px] shadow-lg">
                        <button 
                            onClick={() => setShowModal(false)} 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                        >
                            ✖
                        </button>
                        <h2 className="text-xl font-semibold mb-6 text-left">
                            {isEdit ? "Editar Profesor" : "Agregar Aula"}
                        </h2>

                        {!isEdit && (
                            <div className="mb-5">
                                <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Aula</label>
                                <input 
                                    type="text" 
                                    value={newClassName} 
                                    onChange={(e) => setNewClassName(e.target.value)} 
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                        )}

                        <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Profesor</label>
                        <select 
                            value={selectedTeacher || ''} 
                            onChange={(e) => setSelectedTeacher(Number(e.target.value))} 
                            className="w-full border border-gray-300 rounded p-2"
                        >
                            <option value="">Seleccione un profesor</option>
                            {teachers.map(teacher => (
                                <option key={teacher.id} value={teacher.id}>
                                    {teacher.nombre} {teacher.apellido}
                                </option>
                            ))}
                        </select>

                        <div className="flex justify-evenly pt-5">
                            <AcceptButton onClick={isEdit ? handleSaveEdit : handleAddClassroom}>Aceptar</AcceptButton>
                            <CancelButton onClick={() => setShowModal(false)}>Cancelar</CancelButton>
                        </div>
                    </div>
                </div>
            )}
        </div> 
    );
};

export default Deliveries;
