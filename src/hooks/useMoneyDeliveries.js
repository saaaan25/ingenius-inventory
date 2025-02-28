import { useState, useEffect } from "react";
import { getMoneyDeliveries, createMoneyDelivery, updateMoneyDelivery, deleteMoneyDelivery, getMoneyDelivery } from "@/api/moneyDelivery";

export const useMoneyDeliveries = () => {
    const [moneyDeliveries, setMoneyDeliveries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoneyDeliveries = async () => {
        setLoading(true);
        try {
            const data = await getMoneyDeliveries();
            setMoneyDeliveries(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addMoneyDelivery = async (moneyDelivery) => {
        try {
            const newMoneyDelivery = await createMoneyDelivery(moneyDelivery);
            setMoneyDeliveries([...moneyDeliveries, newMoneyDelivery]);
        } catch (err) {
            setError(err.message);
        }
    };

    const editMoneyDelivery = async (moneyDelivery) => {
        try {
            const updated = await updateMoneyDelivery(moneyDelivery);
            setMoneyDeliveries(moneyDeliveries.map(md => md.id === updated.id ? updated : md));
        } catch (err) {
            setError(err.message);
        }
    };

    const removeMoneyDelivery = async (id) => {
        try {
            await deleteMoneyDelivery(id);
            setMoneyDeliveries(moneyDeliveries.filter(md => md.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchMoneyDelivery = async (id) => {
        setLoading(true);
        try {
            return await getMoneyDelivery(id);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMoneyDeliveries();
    }, []);

    return { moneyDeliveries, loading, error, fetchMoneyDeliveries, addMoneyDelivery, editMoneyDelivery, removeMoneyDelivery, fetchMoneyDelivery };
};
