import { useState, useEffect } from "react";
import { getUtilsDeliveryDetails, createUtilsDeliveryDetail, updateUtilsDeliveryDetail, deleteUtilsDeliveryDetail, getUtilsDeliveryDetail } from "@/api/utilsDeliveryDetailApi";

export const useUtilsDeliveryDetails = () => {
    const [utilsDeliveryDetails, setUtilsDeliveryDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUtilsDeliveryDetails = async () => {
        setLoading(true);
        try {
            const data = await getUtilsDeliveryDetails();
            setUtilsDeliveryDetails(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addUtilsDeliveryDetail = async (utilsDeliveryDetail) => {
        try {
            const newDetail = await createUtilsDeliveryDetail(utilsDeliveryDetail);
            setUtilsDeliveryDetails([...utilsDeliveryDetails, newDetail]);
        } catch (err) {
            setError(err);
        }
    };

    const editUtilsDeliveryDetail = async (utilsDeliveryDetail) => {
        try {
            const updatedDetail = await updateUtilsDeliveryDetail(utilsDeliveryDetail);
            setUtilsDeliveryDetails(utilsDeliveryDetails.map(d => (d.id === updatedDetail.id ? updatedDetail : d)));
        } catch (err) {
            setError(err);
        }
    };

    const removeUtilsDeliveryDetail = async (id) => {
        try {
            await deleteUtilsDeliveryDetail(id);
            setUtilsDeliveryDetails(utilsDeliveryDetails.filter(d => d.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchUtilsDeliveryDetail = async (id) => {
        setLoading(true);
        try {
            return await getUtilsDeliveryDetail(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUtilsDeliveryDetails();
    }, []);

    return { utilsDeliveryDetails, loading, error, fetchUtilsDeliveryDetails, addUtilsDeliveryDetail, editUtilsDeliveryDetail, removeUtilsDeliveryDetail, fetchUtilsDeliveryDetail };
};
