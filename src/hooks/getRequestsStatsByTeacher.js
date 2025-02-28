import { getRequests } from "@/api/requestApi";
import getSuppliesByRequest from "./getSuppliesByRequest";
import { useEffect, useState } from "react";

const useRequestsStatsByTeacher = (id) => {
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

    const solicitudes_profesor = requests.filter((solicitud) => solicitud.user === id).length
    const solicitudes_aceptadas_profesor = requests.filter((solicitud) => solicitud.status === "aceptado" && solicitud.user == id).length
    const solicitudes_rechazadas_profesor = requests.filter((solicitud) => solicitud.status === "rechazado" && solicitud.user == id).length

    const getMaterialsByTeacher = () => {
        let materiales_solicitados_profesor = 0
        let materiales_aceptados_profesor = 0
    
        requests.map((solicitud) => {
            if(solicitud.status != "pendiente" && solicitud.user === id) {
                const materiales = getSuppliesByRequest(solicitud.request_id)
                materiales.map((material) => {
                    materiales_solicitados_profesor = materiales_solicitados_profesor + material.cantidad
                    if(solicitud.status === "aceptado") {
                        materiales_aceptados_profesor = materiales_aceptados_profesor + material.cantidad
                    }
                })
            }
        })
        return {
            materiales_solicitados_profesor, 
            materiales_aceptados_profesor
        }
    }

    const materiales_solicitados_profesor = getMaterialsByTeacher().materiales_solicitados_profesor
    const materiales_aceptados_profesor = getMaterialsByTeacher().materiales_aceptados_profesor

    return {
        solicitudes_profesor,
        solicitudes_aceptadas_profesor,
        solicitudes_rechazadas_profesor,
        materiales_solicitados_profesor,
        materiales_aceptados_profesor
    }
};

export default useRequestsStatsByTeacher;