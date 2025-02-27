import { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser, getUser } from "@/api/userApi";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addUser = async (user) => {
        try {
            const newUser = await createUser(user);
            setUsers([...users, newUser]);
        } catch (err) {
            setError(err);
        }
    };

    const editUser = async (user) => {
        try {
            const updatedUser = await updateUser(user);
            setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
        } catch (err) {
            setError(err);
        }
    };

    const removeUser = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchUser = async (id) => {
        setLoading(true);
        try {
            return await getUser(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading, error, fetchUsers, addUser, editUser, removeUser, fetchUser };
};
