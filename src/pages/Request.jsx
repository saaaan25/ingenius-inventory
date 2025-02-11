import { useParams } from "react-router-dom";
import requests from "../data-test/requests";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import getSpecificDate from "../hooks/getSpecificDate";

const Request = () => {
    const params = useParams()
    const request = requests.find((item) => item.id === Number(params.id))
    const requestDay = getSpecificDate(request.fecha_limite)

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <div className="flex items-center text-routes">
                <a className="font-light text-routes_selected text-sm" href="/requests">Solicitudes</a>
                <HiChevronRight />
                <a className="font-light text-routes_selected text-sm" href={params.id}>Solicitud N° {request.id}</a>
            </div>
            <div className="pl-5 w-full flex flex-col items-start">
                <div className="mt-2 mb-4">
                    <button className="flex text-routes_selected items-center">
                        <HiChevronLeft />
                        <p className="text-sm">Volver</p>
                    </button> 
                </div>
                <h1 className="font-semibold text-xl">Solicitud N° {request.id}</h1>
                <div>
                    <h2 className="text-routes">Fecha solicitada: {requestDay.fullDate}</h2>
                </div>
                <div className="w-full mt-4">
                </div>
            </div>
        </div>
    );
}
 
export default Request;