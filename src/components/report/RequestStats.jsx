import getStatsForRequest from "@/hooks/getStatsForRequests";
import HorizontalBarChart from "./HorizontalBarChart";

const RequestStats = () => {
    const { solicitudes_aceptadas, solicitudes_rechazadas } = getStatsForRequest()
    let total = solicitudes_aceptadas + solicitudes_rechazadas

    if(total===0){
        total = 1
    }

    const data = [
        { name: "Solicitudes", aceptado: solicitudes_aceptadas * 100 / (total), rechazado: solicitudes_rechazadas * 100 / (total) },
        { name: "Materiales", aceptado: solicitudes_aceptadas * 100 / (total), rechazado: solicitudes_rechazadas * 100 / (total) }
    ];

    return (
        <HorizontalBarChart data={data} />
    );
}
 
export default RequestStats;