import solicitudes from "../data-test/solicitud.js";
import getSuppliesByRequest from "./getSuppliesByRequest.js";

const getStatsForRequest = () => {
    const total_solicitudes = solicitudes.length
    const solicitudes_aceptadas = solicitudes.filter(solicitud => solicitud.estado === "aceptado").length
    const solicitudes_rechazadas = solicitudes.filter(solicitud => solicitud.estado === "rechazado").length

    const getMaterialsByRequest = () => {
        let materiales_solicitados = 0
        let materiales_aceptados = 0
    
        solicitudes.map((solicitud) => {
            if(solicitud.estado != "pendiente") {
                const materiales = getSuppliesByRequest(solicitud.id)
                materiales.map((material) => {
                    materiales_solicitados = materiales_solicitados + material.cantidad
                    if(solicitud.estado === "aceptado") {
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