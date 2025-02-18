import solicitudes from "@/data-test/solicitud"
import getSuppliesByRequest from "./getSuppliesByRequest";

const getRequestsStatsByTeacher = (id) => {
    const solicitudes_profesor = solicitudes.filter((solicitud) => solicitud.usuario === id).length
    const solicitudes_aceptadas_profesor = solicitudes.filter((solicitud) => solicitud.estado === "aceptado" && solicitud.usuario == id).length
    const solicitudes_rechazadas_profesor = solicitudes.filter((solicitud) => solicitud.estado === "rechazado" && solicitud.usuario == id).length

    const getMaterialsByTeacher = () => {
        let materiales_solicitados_profesor = 0
        let materiales_aceptados_profesor = 0
    
        solicitudes.map((solicitud) => {
            if(solicitud.estado != "pendiente" && solicitud.usuario === id) {
                const materiales = getSuppliesByRequest(solicitud.id)
                materiales.map((material) => {
                    materiales_solicitados_profesor = materiales_solicitados_profesor + material.cantidad
                    if(solicitud.estado === "aceptado") {
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
    console.log(materiales_solicitados_profesor, materiales_aceptados_profesor)

    return {
        solicitudes_profesor,
        solicitudes_aceptadas_profesor,
        solicitudes_rechazadas_profesor,
        materiales_solicitados_profesor,
        materiales_aceptados_profesor
    }
};

export default getRequestsStatsByTeacher;