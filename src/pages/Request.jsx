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
import { getRequest, getRequests } from "@/api/requestApi";

const Request = () => {
    const { id } = useParams();
    const [request, setRequest] = useState({});  
    const [requests, setRequests] = useState([]);
    const [dataReady, setDataReady] = useState(false);

    useEffect(() => {
        if (!id) return;
    
        const fetchData = async () => {
            try {
                const requestData = await getRequest(id);
                const requestsData = await getRequests();
    
                if (requestData) {
                    setRequest(requestData);
                }
                if (requestsData) {
                    setRequests(requestsData);
                }
    
                setDataReady(true); // Solo marcar como listo después de obtener los datos correctamente
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
    
        fetchData();
    }, [id]);

    if (!dataReady) {
        return <p className="text-center mt-10">Cargando solicitud...</p>;
    }

    if (!request) {
        return <p className="text-center mt-10">No se encontró la solicitud.</p>;
    }

    console.log("Request data:", request);
      
    console.log(request)
    console.log(requests)

    const supplies = getSuppliesByRequest(id)
    const requestDay = getSpecificDate(request.date)

    const page = [
        {
            name: "Solicitudes",
            route: "/requests"
        },
        {
            name: `Solicitud N° ${id}`,
            route: `/${id}`
        }
    ]

    const handleStatus = (status) => {
        const updatedRequest = { ...request, status: status };
        setRequest(updatedRequest);

        setRequests((prevList) =>
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
                        <EditRequestButton solicitud={request} solicitudes={requests} setSolicitudes={setRequests}/>
                    </RoleBasedAccess>   
                </div>
            </div>
        </div>
    );
}
 
export default Request;