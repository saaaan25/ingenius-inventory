import { useParams } from "react-router-dom";
import requests from "../data-test/requests";
import { HiChevronRight } from "react-icons/hi";
import getSpecificDate from "../hooks/getSpecificDate";
import BackButton from "@/components/button/BackButton";
import getSuppliesByRequest from "@/hooks/getSuppliesByRequest";
import SupplyItem from "@/components/SupplyItem";
import { AcceptButton, CancelButton, EditButton } from "@/components/button";

const Request = () => {
    const params = useParams()
    const request = requests.find((item) => item.id === Number(params.id))
    const requestDay = getSpecificDate(request.fecha_limite)
    const supplies = getSuppliesByRequest(params.id)

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3 pb-4">
            <div className="flex items-center text-routes">
                <a className="font-light text-routes_selected text-xs" href="/requests">Solicitudes</a>
                <HiChevronRight />
                <a className="font-light text-routes_selected text-xs" href={params.id}>Solicitud N° {request.id}</a>
            </div>
            <div className="pl-5 w-full h-full flex flex-col items-start">
                <div className="mt-2 mb-4 flex justify-between w-full">
                    <BackButton/> 
                    <div className="flex gap-x-3">
                        <AcceptButton>Aceptar</AcceptButton>
                        <CancelButton>Cancelar</CancelButton>
                    </div>
                </div>
                <h1 className="font-semibold text-xl">Solicitud N° {request.id} - {request.grado}</h1>
                <div>
                    <h2 className="text-routes text-sm">Fecha solicitada: {requestDay.fullDate}</h2>
                </div>
                <div className="w-full mt-4">
                    <div className="flex flex-col items-start text-primary gap-y-1 w-[70%]">
                        <p className="font-bold text-sm">Actividad</p>
                        <p className="font-extralight text-sm">{request.actividad}</p>
                    </div>
                    <div className="mt-8 w-[70%] flex flex-col items-start">
                        <p className="font-bold text-sm">Materiales</p>
                        <div className="flex flex-col gap-y-2 w-full mt-2">
                            {supplies.map((supply) => (
                                <SupplyItem key={supply.code} supply={supply}/>
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