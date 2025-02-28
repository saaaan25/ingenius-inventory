import getSuppliesByRequest from "./getSuppliesByRequest.js";
import { useEffect, useState } from "react";
import { getRequests } from "@/api/requestApi.js";

const useStatsForRequest = () => {
    const [requests, setRequests] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const requestsData = await getRequests();
            setRequests(requestsData);
        } catch (err) {
            setError(err); 
            console.error("Error al obtener los salones:", err);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const total_solicitudes = requests.length
    const solicitudes_aceptadas = requests.filter(solicitud => solicitud.status === "aceptado").length
    const solicitudes_rechazadas = requests.filter(solicitud => solicitud.status === "rechazado").length

    const getMaterialsByRequest = () => {
        let materiales_solicitados = 0
        let materiales_aceptados = 0
    
        requests.map((solicitud) => {
            if(solicitud.status != "pendiente") {
                const materiales = getSuppliesByRequest(solicitud.request_id)
                materiales.map((material) => {
                    materiales_solicitados = materiales_solicitados + material.cantidad
                    if(solicitud.status === "aceptado") {
                        materiales_aceptados = materiales_aceptados + material.cantidad
                    }
                })
            }
        })
        return {
            materiales_solicitados, 
            materiales_aceptados
        }
    }

    const materiales_solicitados = getMaterialsByRequest().materiales_solicitados
    const materiales_aceptados = getMaterialsByRequest().materiales_aceptados

    return {
        total_solicitudes,
        solicitudes_aceptadas,
        solicitudes_rechazadas,
        materiales_solicitados,
        materiales_aceptados
    }
}

export default useStatsForRequest;