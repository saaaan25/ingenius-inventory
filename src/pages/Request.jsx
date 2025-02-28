import { useParams } from "react-router-dom";
import getSpecificDate from "../hooks/getSpecificDate";
import BackButton from "@/components/button/BackButton";
import getSuppliesByRequest from "@/hooks/getSuppliesByRequest";
import SupplyItem from "@/components/SupplyItem";
import { AcceptButton, CancelButton } from "@/components/button";
import PageRoute from "@/components/PageRoute";
import EditRequestButton from "@/components/button/EditRequestButton";
import { useEffect, useState } from "react";
import RoleBasedAccess from "@/components/RoleBasedAccess";
import requests_nuevo from "@/data-test/solicitud_nuevo";

const Request = () => {
    const params = useParams()
    const [solicitudesList, setSolicitudesList] = useState(requests_nuevo);
    console.log(solicitudesList, setSolicitudesList)

    const [request, setRequest] = useState(
        solicitudesList.find((item) => item.request_id == params.id)
    );

    useEffect(() => {
        const updatedRequest = solicitudesList.find((item) => item.request_id == params.id);
        setRequest(updatedRequest);
    }, [solicitudesList, params.id]);

    console.log(solicitudesList, setSolicitudesList)

    const supplies = getSuppliesByRequest(params.id)
    const requestDay = getSpecificDate(request.date)

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

    const handleStatus = (status) => {
        const updatedRequest = { ...request, status: status };
        setRequest(updatedRequest);

        setSolicitudesList((prevList) =>
            prevList.map((req) => (req.request_id === request.request_id ? updatedRequest : req))
        );
        console.log(updatedRequest)
    }

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3 pb-4">
            <PageRoute page1={page[0]} page2={page[1]} />
            <div className="pl-5 w-full h-full flex flex-col items-start">
                <div className="mt-2 mb-4 flex justify-between w-full">
                    <BackButton/> 
                    <div className="flex gap-x-3">
                        <RoleBasedAccess allowedRoles={["administrador", "encargado"]}>
                            { request.status === "pendiente" ? 
                                (
                                    <div className="flex gap-x-3">
                                        <AcceptButton onClick={() => handleStatus("aceptado")}>Aceptar</AcceptButton>
                                        <CancelButton onClick={() => handleStatus("rechazado")}>Rechazar</CancelButton>
                                    </div>
                                ) : (
                                    <p className="text-sm">Solicitud {request.status}</p>
                                )
                            } 
                        </RoleBasedAccess>
                        
                    </div>
                </div>
                <h1 className="font-semibold text-xl">Solicitud N° {request.requests_id} - {request.classroom}</h1>
                <div>
                    <h2 className="text-routes">Fecha solicitada: {requestDay.fullDate}</h2>
                </div>
                <div className="w-full mt-4">
                    <div className="flex flex-col items-start text-primary gap-y-1 w-[70%]">
                        <p className="font-bold">Actividad</p>
                        <p className="font-extralight">{request.justification}</p>
                    </div>
                    <div className="mt-8 w-[70%] flex flex-col items-start">
                        <p className="font-bold">Materiales</p>
                        <div className="flex flex-col gap-y-2 w-full mt-2">
                            {supplies.map((supply) => (
                                <SupplyItem key={supply.util_id} supply={supply}/>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div className="h-full w-full flex items-end justify-center">
                    <RoleBasedAccess allowedRoles={["profesor"]}>
                        <EditRequestButton solicitud={request} solicitudes={solicitudesList} setSolicitudes={setSolicitudesList}/>
                    </RoleBasedAccess>   
                </div>
            </div>
        </div>
    );
}
 
export default Request;