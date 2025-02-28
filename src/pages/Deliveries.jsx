import { useState, useEffect } from "react";
import { getClassrooms, createClassroom, updateClassroom, deleteClassroom } from "@/api/classroomApi.js";
import ClassRoom from "../components/deliveries/ClassRoom.jsx";
import { AddButton } from "@/components/button/AddButton.jsx";
import PageRoute from "@/components/PageRoute.jsx";
import { AcceptButton } from "@/components/button/AcceptButton.jsx";
import { CancelButton } from "@/components/button/index.js";
import { getUsers } from "@/api/userApi.js";
import { createUtilList } from "@/api/utilListApi.js";

const pastelColors = ["#FFD1DC", "#FFECB3", "#C8E6C9", "#BBDEFB", "#D1C4E9", "#FFCCBC"];

const Deliveries = () => {
    const page = { name: "Salones", route: "/deliveries" };
    const [teachers, setTeachers] = useState([]);
    const [classrooms, setClassrooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [newClassName, setNewClassName] = useState("");
    const [classroom, setClassroom] = useState();
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [editingClassId, setEditingClassId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const classroomsData = await getClassrooms();
                console.log(classroomsData);
                setClassrooms(classroomsData.map((c, index) => ({
                    ...c,
                    color: pastelColors[index % pastelColors.length],
                })));

                const usersData = await getUsers();
                const teachersData = usersData.filter(user => user.role === "profesor");
                setTeachers(teachersData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddClassroom = async () => {
        if (!newClassName || !selectedTeacher) {
            alert("Por favor, ingresa un nombre de aula y selecciona un profesor.");
            return;
        }

        try {
            // Crear un nuevo utils_list
            const newUtilList = {
                name: "Lista de útiles " + newClassName,
                total: 0,
            };
            const createdUtilList = await createUtilList(newUtilList);
            const utilListId = createdUtilList.id;

            const newClass = {
                name: newClassName,
                user: selectedTeacher,
                utils_list: utilListId,
            };

            const createdClassroom = await createClassroom(newClass);
            setClassroom(createdClassroom)
            console.log(createdClassroom);

            setClassrooms(prevClassrooms => [
                ...prevClassrooms,
                {
                    ...createdClassroom,
                    color: pastelColors[prevClassrooms.length % pastelColors.length],
                },
            ]);

            resetModal();
        } catch (err) {
            console.error("Error al agregar el salón:", err);
            alert("Ocurrió un error al agregar el salón. Por favor, inténtalo de nuevo.");
        }
    };

    const handleDeleteClassroom = async (id) => {
        try {
            await deleteClassroom(id);
            setClassrooms(prevClassrooms => prevClassrooms.filter(c => c.classroom_id !== id));
        } catch (err) {
            console.error("Error al eliminar el salón:", err);
            alert("Ocurrió un error al eliminar el salón. Por favor, inténtalo de nuevo.");
        }
    };

    const handleEditClassroom = (id) => {
        console.log("Editando aula con ID:", id);
        setIsEdit(true);
        setShowModal(true);
        const classroomToEdit = classrooms.find(c => c.classroom_id == id);
        if (classroomToEdit) {
            setEditingClassId(id);
            setNewClassName(classroomToEdit.name);
            setSelectedTeacher(classroomToEdit.user);
        }
    };

    const handleSaveEdit = async () => {
        if (!newClassName || !selectedTeacher) {
            alert("Por favor, ingresa un nombre de aula y selecciona un profesor.");
            return;
        }
    
        try {
            // Obtener el aula actual que se está editando
            const existingClassroom = classrooms.find(c => c.classroom_id === editingClassId);
            if (!existingClassroom) {
                throw new Error("No se encontró el aula que se está editando.");
            }
    
            // Mantener el mismo util_list del aula actual
            const updatedClassroom = {
                classroom_id: editingClassId,
                name: newClassName,
                user: selectedTeacher,
                utils_list: existingClassroom.utils_list, // Mantener el mismo util_list
            };
    
            // Llama a la API para actualizar el aula
            const updatedData = await updateClassroom(updatedClassroom);
    
            // Actualiza la lista de aulas en el estado
            setClassrooms(prevClassrooms =>
                prevClassrooms.map(c =>
                    c.classroom_id === editingClassId ? { ...c, ...updatedData } : c
                )
            );
    
            resetModal();
        } catch (err) {
            console.error("Error al editar el salón:", err);
            alert("Ocurrió un error al editar el salón. Por favor, inténtalo de nuevo.");
        }
    };

    const resetModal = () => {
        setShowModal(false);
        setIsEdit(false);
        setNewClassName("");
        setSelectedTeacher("");
        setEditingClassId(null); // Limpia el ID de edición
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
                {loading && <p>Cargando...</p>}
                {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
                <div className="grid grid-cols-3 gap-6">
                    {classrooms.map(classroom => (
                        <ClassRoom
                            key={classroom.id}
                            id={classroom.id}
                            nombre={classroom.name}
                            profesorId={classroom.user}
                            classRoom={classroom}
                            color={classroom.color}
                            onDelete={handleDeleteClassroom}
                            onEdit={handleEditClassroom}
                        />
                    ))}
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30">
                    <div className="relative bg-white p-8 rounded-lg w-[600px] shadow-lg">
                        <h2 className="text-xl font-semibold mb-6 text-left">
                            {isEdit ? "Editar Aula" : "Agregar Aula"}
                        </h2>
                        <input
                            type="text"
                            value={newClassName}
                            onChange={e => setNewClassName(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2 mb-5"
                            placeholder="Nombre del aula"
                        />
                        <select
                            value={selectedTeacher}
                            onChange={e => setSelectedTeacher(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2"
                        >
                            <option value="">Seleccione un profesor</option>
                            {teachers.map(teacher => (
                                <option key={teacher.id} value={teacher.id}>{teacher.name} {teacher.last_name}</option>
                            ))}
                        </select>
                        <div className="flex justify-evenly pt-5">
                            <AcceptButton onClick={isEdit ? handleSaveEdit : handleAddClassroom}>Aceptar</AcceptButton>
                            <CancelButton onClick={resetModal}>Cancelar</CancelButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Deliveries;