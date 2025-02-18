import getStatsForRequest from "@/hooks/getStatsForRequests";
import Container from "./Container";
import RequestStats from "./RequestStats";
import StatItem from "./StatItem";
import getRequestsStatsByTeacher from "@/hooks/getRequestsStatsByTeacher";
import users from "@/data-test/users";
import getMaterialsByTeacher from "@/hooks/getMaterialsByTeacher";

const RequestsSection = () => {
    const title = "Resumen de solicitudes"
    const { total_solicitudes, solicitudes_aceptadas, solicitudes_rechazadas, materiales_solicitados, materiales_aceptados } = getStatsForRequest()
    
    const resume = [
        {
            description: "Total de solicitudes",
            value: total_solicitudes
        },
        {
            description: "Solicitudes aceptadas",
            value: solicitudes_aceptadas
        },
        {
            description: "Solicitudes rechazadas",
            value: solicitudes_rechazadas
        },
        {
            description: "Materiales solicitados",
            value: materiales_solicitados
        },
        {
            description: "Materiales aprobados",
            value: materiales_aceptados
        }
    ]

    const profesores = users.filter((user) => user.rol === "profesor")
    console.log(profesores)

    profesores.map((profesor) => {
        console.log(profesor.id)
        const { solicitudes_profesor, solicitudes_aceptadas_profesor, solicitudes_rechazadas_profesor, materiales_solicitados_profesor, materiales_aceptados_profesor} = getRequestsStatsByTeacher(profesor.id)
        const materiales = getMaterialsByTeacher(profesor.id)
    })

    

    return (
        <Container>
            <div className="grid w-full grid-cols-1 md:grid-cols-[3fr_2fr] gap-x-10">
                <div className="flex flex-col gap-y-4">
                    <p className="flex justify-start font-bold w-full">{title}</p>
                    <RequestStats />
                </div>
                <div className="flex flex-col items-start gap-y-1.5 mr-5">
                    <div className="">
                        ola
                    </div>
                    {resume.map((item) => (
                        <StatItem key={item.description} description={item.description} value={item.value} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
 
export default RequestsSection;