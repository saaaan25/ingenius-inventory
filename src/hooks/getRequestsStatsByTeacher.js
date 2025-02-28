import getSuppliesByRequest from "./getSuppliesByRequest";
import requests_nuevo from "@/data-test/solicitud_nuevo";

const getRequestsStatsByTeacher = (id) => {
    const solicitudes_profesor = requests_nuevo.filter((solicitud) => solicitud.user === id).length
    const solicitudes_aceptadas_profesor = requests_nuevo.filter((solicitud) => solicitud.status === "aceptado" && solicitud.user == id).length
    const solicitudes_rechazadas_profesor = requests_nuevo.filter((solicitud) => solicitud.status === "rechazado" && solicitud.user == id).length

    const getMaterialsByTeacher = () => {
        let materiales_solicitados_profesor = 0
        let materiales_aceptados_profesor = 0
    
        requests_nuevo.map((solicitud) => {
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

export default getRequestsStatsByTeacher;