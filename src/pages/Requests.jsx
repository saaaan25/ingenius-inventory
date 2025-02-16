import solicitudes from "../data-test/solicitud";
import NavBar from "@/components/NavBar";
import RequestsSection from "@/components/request/RequestsSection";
import useActiveTab from "@/hooks/setActiveTab";
import { useMemo } from "react";

const Requests = () => {
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
    ], [])

    const { activeTab, setActiveTab, filteredShowList } = useActiveTab(options);

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <a className="font-light text-routes text-xs" href="/requests">Solicitudes</a>
            <div className="pl-5 w-full flex flex-col items-start">
                <h1 className="font-semibold text-xl mb-2">Solicitudes</h1>
                <NavBar options={options} active={activeTab} setActive={setActiveTab}/>
                <RequestsSection requests={filteredShowList} />
            </div>
        </div>
    );
}
 
export default Requests;