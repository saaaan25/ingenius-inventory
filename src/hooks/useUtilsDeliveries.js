import { useState, useEffect } from "react";
import { getUtilsDeliveries, createUtilsDelivery, updateUtilsDelivery, deleteUtilsDelivery, getUtilsDelivery } from "@/api/utilsDeliveryApi";

export const useUtilsDeliveries = () => {
    const [utilsDeliveries, setUtilsDeliveries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUtilsDeliveries = async () => {
        setLoading(true);
        try {
            const data = await getUtilsDeliveries();
            setUtilsDeliveries(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addUtilsDelivery = async (utilsDelivery) => {
        try {
            const newUtilsDelivery = await createUtilsDelivery(utilsDelivery);
            setUtilsDeliveries([...utilsDeliveries, newUtilsDelivery]);
        } catch (err) {
            setError(err);
        }
    };

    const editUtilsDelivery = async (utilsDelivery) => {
        try {
            const updatedUtilsDelivery = await updateUtilsDelivery(utilsDelivery);
            setUtilsDeliveries(utilsDeliveries.map(u => (u.id === updatedUtilsDelivery.id ? updatedUtilsDelivery : u)));
        } catch (err) {
            setError(err);
        }
    };

    const removeUtilsDelivery = async (id) => {
        try {
            await deleteUtilsDelivery(id);
            setUtilsDeliveries(utilsDeliveries.filter(u => u.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchUtilsDelivery = async (id) => {
        setLoading(true);
        try {
            return await getUtilsDelivery(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUtilsDeliveries();
    }, []);

    return { utilsDeliveries, loading, error, fetchUtilsDeliveries, addUtilsDelivery, editUtilsDelivery, removeUtilsDelivery, fetchUtilsDelivery };
};
