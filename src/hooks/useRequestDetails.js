import { useState, useEffect } from "react";
import { getRequestDetails, createRequestDetail, updateRequestDetail, deleteRequestDetail, getRequestDetail } from "@/api/requestDetailApi";

export const useRequestDetails = () => {
    const [requestDetails, setRequestDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRequestDetails = async () => {
        setLoading(true);
        try {
            const data = await getRequestDetails();
            setRequestDetails(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addRequestDetail = async (requestDetail) => {
        try {
            const newRequestDetail = await createRequestDetail(requestDetail);
            setRequestDetails([...requestDetails, newRequestDetail]);
        } catch (err) {
            setError(err);
        }
    };

    const editRequestDetail = async (requestDetail) => {
        try {
            const updatedRequestDetail = await updateRequestDetail(requestDetail);
            setRequestDetails(requestDetails.map(rd => (rd.id === updatedRequestDetail.id ? updatedRequestDetail : rd)));
        } catch (err) {
            setError(err);
        }
    };

    const removeRequestDetail = async (id) => {
        try {
            await deleteRequestDetail(id);
            setRequestDetails(requestDetails.filter(rd => rd.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchRequestDetail = async (id) => {
        setLoading(true);
        try {
            return await getRequestDetail(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequestDetails();
    }, []);

    return { requestDetails, loading, error, fetchRequestDetails, addRequestDetail, editRequestDetail, removeRequestDetail, fetchRequestDetail };
};
