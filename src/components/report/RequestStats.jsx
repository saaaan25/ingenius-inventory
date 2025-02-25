import getStatsForRequest from "@/hooks/getStatsForRequests";
import HorizontalBarChart from "./HorizontalBarChart";

const RequestStats = () => {
    const { solicitudes_aceptadas, solicitudes_rechazadas } = getStatsForRequest()
    const total = solicitudes_aceptadas + solicitudes_rechazadas

    const data = [
        { name: "Solicitudes", aceptado: solicitudes_aceptadas * 100 / (total), rechazado: solicitudes_rechazadas * 100 / (total) },
        { name: "Materiales", aceptado: solicitudes_aceptadas * 100 / (total), rechazado: solicitudes_rechazadas * 100 / (total) }
    ];

    return (
        <HorizontalBarChart data={data} />
    );
}
 
export default RequestStats;