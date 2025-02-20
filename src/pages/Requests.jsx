import solicitudes from "../data-test/solicitud";
import NavBar from "@/components/ui/NavBar";
import RequestsSection from "@/components/request/RequestsSection";
import useActiveTab from "@/hooks/setActiveTab";
import { useMemo } from "react";
import PageRoute from "@/components/PageRoute";

const Requests = () => {
    const page = {
        name: "Solicitudes",
        route: "/requests"
    }

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
            <PageRoute page1={page} />
            <div className="pl-5 w-full flex flex-col items-start">
                <h1 className="font-semibold text-xl mb-2">Solicitudes</h1>
                <NavBar options={options} active={activeTab} setActive={setActiveTab}/>
                <RequestsSection requests={filteredShowList} />
            </div>
        </div>
    );
}
 
export default Requests;