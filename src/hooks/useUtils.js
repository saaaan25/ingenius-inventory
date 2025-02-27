import { useState, useEffect } from "react";
import { getUtils, createUtil, updateUtil, deleteUtil, getUtil } from "@/api/utilApi";

export const useUtils = () => {
    const [utils, setUtils] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUtils = async () => {
        setLoading(true);
        try {
            const data = await getUtils();
            setUtils(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addUtil = async (util) => {
        try {
            const newUtil = await createUtil(util);
            setUtils([...utils, newUtil]);
        } catch (err) {
            setError(err);
        }
    };

    const editUtil = async (util) => {
        try {
            const updatedUtil = await updateUtil(util);
            setUtils(utils.map(u => (u.id === updatedUtil.id ? updatedUtil : u)));
        } catch (err) {
            setError(err);
        }
    };

    const removeUtil = async (id) => {
        try {
            await deleteUtil(id);
            setUtils(utils.filter(u => u.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchUtil = async (id) => {
        setLoading(true);
        try {
            return await getUtil(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUtils();
    }, []);

    return { utils, loading, error, fetchUtils, addUtil, editUtil, removeUtil, fetchUtil };
};
