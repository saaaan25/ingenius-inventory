import { useState, useEffect } from "react";
import { getDeliveries, createDelivery, updateDelivery, deleteDelivery, getDelivery } from "@/api/deliveryApi";

export const useDeliveries = () => {
    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDeliveries = async () => {
        setLoading(true);
        try {
            const data = await getDeliveries();
            setDeliveries(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addDelivery = async (delivery) => {
        try {
            const newDelivery = await createDelivery(delivery);
            setDeliveries([...deliveries, newDelivery]);
        } catch (err) {
            setError(err);
        }
    };

    const editDelivery = async (delivery) => {
        try {
            const updatedDelivery = await updateDelivery(delivery);
            setDeliveries(deliveries.map(dlv => (dlv.id === updatedDelivery.id ? updatedDelivery : dlv)));
        } catch (err) {
            setError(err);
        }
    };

    const removeDelivery = async (id) => {
        try {
            await deleteDelivery(id);
            setDeliveries(deliveries.filter(dlv => dlv.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchDelivery = async (id) => {
        setLoading(true);
        try {
            return await getDelivery(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDeliveries();
    }, []);

    return { deliveries, loading, error, fetchDeliveries, addDelivery, editDelivery, removeDelivery, fetchDelivery };
};
