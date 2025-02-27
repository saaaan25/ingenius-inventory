import { useState, useEffect } from "react";
import { getStudents, createStudent, updateStudent, deleteStudent, getStudent } from "@/api/studentApi";

export const useStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchStudents = async () => {
        setLoading(true);
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addStudent = async (student) => {
        try {
            const newStudent = await createStudent(student);
            setStudents([...students, newStudent]);
        } catch (err) {
            setError(err);
        }
    };

    const editStudent = async (student) => {
        try {
            const updatedStudent = await updateStudent(student);
            setStudents(students.map(s => (s.id === updatedStudent.id ? updatedStudent : s)));
        } catch (err) {
            setError(err);
        }
    };

    const removeStudent = async (id) => {
        try {
            await deleteStudent(id);
            setStudents(students.filter(s => s.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchStudent = async (id) => {
        setLoading(true);
        try {
            return await getStudent(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return { students, loading, error, fetchStudents, addStudent, editStudent, removeStudent, fetchStudent };
};
