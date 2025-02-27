import { useState, useEffect } from "react";
import { getUtilLists, createUtilList, updateUtilList, deleteUtilList, getUtilList } from "@/api/utilListApi";

export const useUtilLists = () => {
    const [utilLists, setUtilLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUtilLists = async () => {
        setLoading(true);
        try {
            const data = await getUtilLists();
            setUtilLists(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addUtilList = async (utilList) => {
        try {
            const newUtilList = await createUtilList(utilList);
            setUtilLists([...utilLists, newUtilList]);
        } catch (err) {
            setError(err);
        }
    };

    const editUtilList = async (utilList) => {
        try {
            const updatedUtilList = await updateUtilList(utilList);
            setUtilLists(utilLists.map(u => (u.id === updatedUtilList.id ? updatedUtilList : u)));
        } catch (err) {
            setError(err);
        }
    };

    const removeUtilList = async (id) => {
        try {
            await deleteUtilList(id);
            setUtilLists(utilLists.filter(u => u.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchUtilList = async (id) => {
        setLoading(true);
        try {
            return await getUtilList(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUtilLists();
    }, []);

    return { utilLists, loading, error, fetchUtilLists, addUtilList, editUtilList, removeUtilList, fetchUtilList };
};
