import solicitudesData from "../data-test/solicitud";
import NavBar from "@/components/ui/NavBar";
import RequestsSection from "@/components/request/RequestsSection";
import useActiveTab from "@/hooks/setActiveTab";
import { useMemo, useState } from "react";
import PageRoute from "@/components/PageRoute";
import AddRequestButton from "@/components/button/AddRequestButton";

const Requests = () => {
    const page = {
        name: "Solicitudes",
        route: "/requests"
    }

    const [solicitudes, setSolicitudes] = useState(solicitudesData);

    const options = useMemo(() => [
        {
            id: "Pendientes",
            estado: "pendiente",
            lista: solicitudes.filter(request => request.estado === "pendiente")
        },
        {
            id: "Terminados",
            estado: "terminado",
            lista: solicitudes.filter(request => request.estado != "pendiente")
        }
    ], [solicitudes])

    const { activeTab, setActiveTab, filteredShowList } = useActiveTab(options);

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <PageRoute page1={page} />
            <div className="pl-5 w-full flex flex-col items-start">
                <div className="w-full flex justify-between">
                    <h1 className="font-semibold text-xl mb-2">Solicitudes</h1> 
                    <AddRequestButton setSolicitudes={setSolicitudes} solicitudes={solicitudes}/>
                </div>
                <NavBar options={options} active={activeTab} setActive={setActiveTab}/>
                <RequestsSection requests={filteredShowList} />
            </div>
        </div>
    );
}
 
export default Requests;