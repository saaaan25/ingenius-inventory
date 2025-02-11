import { useParams } from "react-router-dom";
import requests from "../data-test/requests";
import { HiChevronRight } from "react-icons/hi";

const Request = () => {
    const params = useParams()
    const request = requests.find((item) => item.id === Number(params.id))
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <div className="flex items-center text-routes">
                <a className="font-light text-routes text-sm" href="/requests">Solicitudes</a>
                <HiChevronRight />
                <a className="font-light text-routes text-sm" href={params.id}>Solicitud N° {request.id}</a>
            </div>
            <div className="pl-5 w-full flex flex-col items-start">
                <h1 className="font-semibold text-xl">Solicitud N° {request.id}</h1>
                <div className="w-full mt-4">
                </div>
            </div>
        </div>
    );
}
 
export default Request;