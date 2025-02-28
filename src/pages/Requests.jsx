import solicitudesData from "../data-test/solicitud_nuevo";
import NavBar from "@/components/ui/NavBar";
import RequestsSection from "@/components/request/RequestsSection";
import useActiveTab from "@/hooks/setActiveTab";
import { useEffect, useMemo, useState } from "react";
import PageRoute from "@/components/PageRoute";
import AddRequestButton from "@/components/button/AddRequestButton";
import RoleBasedAccess from "@/components/RoleBasedAccess";
import { getRequests } from "@/api/requestApi";

const Requests = () => {
    const page = {
        name: "Solicitudes",
        route: "/requests"
    }

    const [solicitudes, setSolicitudes] = useState([]);

    const fetchData = async() => {
        try {
            const solicitudesDatos = await getRequests();
            setSolicitudes(solicitudesDatos);
        } catch (error) {
            console.error("Error al obtener solicitudes:", error);
            if (error.response) {
                console.error("Respuesta del servidor:", error.response.data);
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const options = useMemo(() => [
        {
            id: "Pendientes",
            estado: "pendiente",
            lista: solicitudes.filter(request => request.status === "pendiente")
        },
        {
            id: "Terminados",
            estado: "terminado",
            lista: solicitudes.filter(request => request.status != "pendiente")
        }
    ], [solicitudes])

    const { activeTab, setActiveTab, filteredShowList } = useActiveTab(options);
    console.log(solicitudes, setSolicitudes, filteredShowList)

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <PageRoute page1={page} />
            <div className="pl-5 w-full flex flex-col items-start">
                <div className="w-full flex justify-between">
                    <h1 className="font-semibold text-xl mb-2">Solicitudes</h1> 
                    <RoleBasedAccess allowedRoles={["profesor"]}>
                        <AddRequestButton setSolicitudes={setSolicitudes} solicitudes={solicitudes}/>
                    </RoleBasedAccess>
                </div>
                <NavBar options={options} active={activeTab} setActive={setActiveTab}/>
                <RequestsSection requests={filteredShowList} />
            </div>
        </div>
    );
}
 
export default Requests;