import getStatsForRequest from "@/hooks/getStatsForRequests";
import Container from "../ui/Container";
import RequestStats from "./RequestStats";
import StatItem from "./StatItem";
import getRequestsStatsByTeacher from "@/hooks/getRequestsStatsByTeacher";
import users from "@/data-test/users";
import { useState } from "react";
import Dropdown from "../ui/Dropdown";

const RequestsSection = () => {
    const title = "Resumen de solicitudes"
    const { total_solicitudes, solicitudes_aceptadas, solicitudes_rechazadas, materiales_solicitados, materiales_aceptados } = getStatsForRequest()
    const defaultResume = [
        { description: "Total de solicitudes", value: total_solicitudes },
        { description: "Solicitudes aceptadas", value: solicitudes_aceptadas },
        { description: "Solicitudes rechazadas", value: solicitudes_rechazadas },
        { description: "Materiales solicitados", value: materiales_solicitados },
        { description: "Materiales aprobados", value: materiales_aceptados }
    ];
    const [resume, setResume] = useState(defaultResume);
    const [selectedTeacher, setSelectedTeacher] = useState("default");

    let profesores = users.filter(user => user.rol === "profesor").map(profesor => ({
        id: profesor.id,
        nombre: `${profesor.nombre} ${profesor.apellido}`
    }));

    const handleSelectChange = (event) => {
        const teacher = event.target.value;

        if (teacher === "default") {
            setResume(defaultResume);
        } else {
            const { solicitudes_profesor, solicitudes_aceptadas_profesor, solicitudes_rechazadas_profesor, materiales_solicitados_profesor, materiales_aceptados_profesor} = getRequestsStatsByTeacher(Number(teacher))
            setResume([
                { description: "Total de solicitudes", value: solicitudes_profesor },
                { description: "Solicitudes aceptadas", value: solicitudes_aceptadas_profesor },
                { description: "Solicitudes rechazadas", value: solicitudes_rechazadas_profesor },
                { description: "Materiales solicitados", value: materiales_solicitados_profesor },
                { description: "Materiales aprobados", value: materiales_aceptados_profesor }
            ]);
        }

        setSelectedTeacher(teacher);
    };

    return (
        <Container>
            <div className="grid w-full grid-cols-1 md:grid-cols-[3fr_2fr] gap-x-10">
                <div className="flex flex-col gap-y-4">
                    <p className="flex justify-start font-bold w-full">{title}</p>
                    <RequestStats />
                </div>
                <div className="flex flex-col items-start gap-y-1.5 mr-5">
                    <div className="flex w-full justify-end mb-4 -mr-5">
                        <Dropdown options={profesores} onChange={handleSelectChange} selectedValue={selectedTeacher} />
                    </div>
                    {resume.map((item, index) => (
                        <StatItem key={index} description={item.description} value={item.value} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
 
export default RequestsSection;