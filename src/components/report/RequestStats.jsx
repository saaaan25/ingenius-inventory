import getStatsForRequest from "@/hooks/getStatsForRequests";
import HorizontalBarChart from "./HorizontalBarChart";

const RequestStats = () => {
    const { total_solicitudes, solicitudes_aceptadas, solicitudes_rechazadas } = getStatsForRequest()
    const total = solicitudes_aceptadas + solicitudes_rechazadas

    const data = [
        { name: "Solicitudes", part1: solicitudes_aceptadas / (total), part2: solicitudes_rechazadas / (total) },
        { name: "Materiales", part1: solicitudes_aceptadas / (total), part2: solicitudes_rechazadas / (total) }
    ];

    console.log(data)
    return (
        <HorizontalBarChart data={data} />
    );
}
 
export default RequestStats;