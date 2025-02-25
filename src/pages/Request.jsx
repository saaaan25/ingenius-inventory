import { useParams } from "react-router-dom";
import solicitudes from "../data-test/solicitud";
import getSpecificDate from "../hooks/getSpecificDate";
import BackButton from "@/components/button/BackButton";
import getSuppliesByRequest from "@/hooks/getSuppliesByRequest";
import SupplyItem from "@/components/SupplyItem";
import { AcceptButton, CancelButton, EditButton } from "@/components/button";
import PageRoute from "@/components/PageRoute";

const Request = () => {
    const params = useParams()
    const request = solicitudes.find((item) => item.id === Number(params.id))
    const requestDay = getSpecificDate(request.fecha)
    const supplies = getSuppliesByRequest(params.id)

    const page = [
        {
            name: "Solicitudes",
            route: "/requests"
        },
        {
            name: `Solicitud N° ${params.id}`,
            route: `/${params.id}`
        }
    ]

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3 pb-4">
            <PageRoute page1={page[0]} page2={page[1]} />
            <div className="pl-5 w-full h-full flex flex-col items-start">
                <div className="mt-2 mb-4 flex justify-between w-full">
                    <BackButton/> 
                    <div className="flex gap-x-3">
                        <AcceptButton>Aceptar</AcceptButton>
                        <CancelButton>Cancelar</CancelButton>
                    </div>
                </div>
                <h1 className="font-semibold text-xl">Solicitud N° {request.id} - {request.aula}</h1>
                <div>
                    <h2 className="text-routes">Fecha solicitada: {requestDay.fullDate}</h2>
                </div>
                <div className="w-full mt-4">
                    <div className="flex flex-col items-start text-primary gap-y-1 w-[70%]">
                        <p className="font-bold">Actividad</p>
                        <p className="font-extralight">{request.justificacion}</p>
                    </div>
                    <div className="mt-8 w-[70%] flex flex-col items-start">
                        <p className="font-bold">Materiales</p>
                        <div className="flex flex-col gap-y-2 w-full mt-2">
                            {supplies.map((supply) => (
                                <SupplyItem key={supply.id} supply={supply}/>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div className="h-full w-full flex items-end justify-center">
                    <EditButton>
                        Editar solicitud
                    </EditButton>
                </div>
            </div>
        </div>
    );
}
 
export default Request;