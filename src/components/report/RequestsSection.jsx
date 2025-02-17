import getStatsForRequest from "@/hooks/getStatsForRequests";
import Container from "./Container";
import RequestStats from "./RequestStats";

const RequestsSection = () => {
    const title = "Resumen de solicitudes"
    const { total_solicitudes, solicitudes_aceptadas, solicitudes_rechazadas } = getStatsForRequest()

    return (
        <Container title={title}>
            <RequestStats />
        </Container>
    );
}
 
export default RequestsSection;