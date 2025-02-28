import requests_nuevo from "@/data-test/solicitud_nuevo.js";
import getSuppliesByRequest from "./getSuppliesByRequest.js";

const getStatsForRequest = () => {
    const total_solicitudes = requests_nuevo.length
    const solicitudes_aceptadas = requests_nuevo.filter(solicitud => solicitud.status === "aceptado").length
    const solicitudes_rechazadas = requests_nuevo.filter(solicitud => solicitud.status === "rechazado").length

    const getMaterialsByRequest = () => {
        let materiales_solicitados = 0
        let materiales_aceptados = 0
    
        requests_nuevo.map((solicitud) => {
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

export default getStatsForRequest;