import getStatsForRequest from "@/hooks/getStatsForRequests";
import Container from "./Container";

const RequestsSection = () => {
    const title = "Resumen de solicitudes"
    const { total_solicitudes, solicitudes_aceptadas, solicitudes_rechazadas } = getStatsForRequest()

    return (
        <Container title={title}>
            {total_solicitudes}
        </Container>
    );
}
 
export default RequestsSection;