import { useState, useEffect } from "react";
import { getListDetails, createListDetail, updateListDetail, deleteListDetail, getListDetail } from "@/api/listDetailApi";

export const useListDetails = () => {
    const [listDetails, setListDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchListDetails = async () => {
        setLoading(true);
        try {
            const data = await getListDetails();
            setListDetails(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addListDetail = async (listDetail) => {
        try {
            const newListDetail = await createListDetail(listDetail);
            setListDetails([...listDetails, newListDetail]);
        } catch (err) {
            setError(err);
        }
    };

    const editListDetail = async (listDetail) => {
        try {
            const updatedListDetail = await updateListDetail(listDetail);
            setListDetails(listDetails.map(ld => (ld.id === updatedListDetail.id ? updatedListDetail : ld)));
        } catch (err) {
            setError(err);
        }
    };

    const removeListDetail = async (id) => {
        try {
            await deleteListDetail(id);
            setListDetails(listDetails.filter(ld => ld.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchListDetail = async (id) => {
        setLoading(true);
        try {
            return await getListDetail(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchListDetails();
    }, []);

    return { listDetails, loading, error, fetchListDetails, addListDetail, editListDetail, removeListDetail, fetchListDetail };
};
