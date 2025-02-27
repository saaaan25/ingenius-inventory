import { useState, useEffect } from "react";
import { getRequests, createRequest, updateRequest, deleteRequest, getRequest } from "@/api/requestApi";

export const useRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const data = await getRequests();
            setRequests(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addRequest = async (request) => {
        try {
            const newRequest = await createRequest(request);
            setRequests([...requests, newRequest]);
        } catch (err) {
            setError(err);
        }
    };

    const editRequest = async (request) => {
        try {
            const updatedRequest = await updateRequest(request);
            setRequests(requests.map(req => (req.id === updatedRequest.id ? updatedRequest : req)));
        } catch (err) {
            setError(err);
        }
    };

    const removeRequest = async (id) => {
        try {
            await deleteRequest(id);
            setRequests(requests.filter(req => req.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const fetchRequest = async (id) => {
        setLoading(true);
        try {
            return await getRequest(id);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    return { requests, loading, error, fetchRequests, addRequest, editRequest, removeRequest, fetchRequest };
};