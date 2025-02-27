import { useState, useEffect } from "react";
import { getClassrooms, createClassroom, updateClassroom, deleteClassroom, getClassroom } from "@/api/classroomApi";

export const useClassrooms = () => {
    const [classrooms, setClassrooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchClassrooms = async () => {
        setLoading(true);
        try {
            const data = await getClassrooms();
            setClassrooms(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addClassroom = async (classroom) => {
        try {
            const newClassroom = await createClassroom(classroom);
            setClassrooms([...classrooms, newClassroom]);
        } catch (err) {
            setError(err);
        }
    };

    const editClassroom = async (classroom) => {
        try {
            const updatedClassroom = await updateClassroom(classroom);
            setClassrooms(classrooms.map(cls => (cls.id === updatedClassroom.id ? updatedClassroom : cls)));
        } catch (err) {
            setError(err);
        }
    };

    const removeClassroom = async (id) => {
        try {
            await deleteClassroom(id);
            setClassrooms(classrooms.filter(cls => cls.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchClassroom = async (id) => {
        setLoading(true);
        try {
            return await getClassroom(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClassrooms();
    }, []);

    return { classrooms, loading, error, fetchClassrooms, addClassroom, editClassroom, removeClassroom, fetchClassroom };
};
