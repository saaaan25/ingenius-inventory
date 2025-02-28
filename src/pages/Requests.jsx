import solicitudesData from "../data-test/solicitud_nuevo";
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
            lista: solicitudes.filter(request => request.status === "pendiente")
        },
        {
            id: "Terminados",
            estado: "terminado",
            lista: solicitudes.filter(request => request.status != "pendiente")
        }
    ], [solicitudes])

    const { activeTab, setActiveTab, filteredShowList } = useActiveTab(options);
    console.log(solicitudes, setSolicitudes)

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