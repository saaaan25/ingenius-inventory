import solicitudes from "../data-test/solicitud.js";

const getStatsForRequest = () => {
    const total_solicitudes = solicitudes.length
    const solicitudes_aceptadas = solicitudes.filter(solicitud => solicitud.estado === "aceptado").length
    const solicitudes_rechazadas = solicitudes.filter(solicitud => solicitud.estado === "rechazado").length

    return {
        total_solicitudes,
        solicitudes_aceptadas,
        solicitudes_rechazadas
    }
}

export default getStatsForRequest;