import getStatsForPurchases from "./getStatsForPurchases"
import { getUtils } from "@/api"
import { useEffect, useState } from "react"
import { getRequestDetails } from "@/api/requestDetailApi"
import { getRequests } from "@/api/requestApi"
import { getMoneyDeliveries } from "@/api/moneyDeliveryApi"

const useGeneralStats = () => {
    const [utils, setUtils] = useState([])
    const [moneyDeliveries, setMoneyDeliveries] = useState([])
    const [requests, setRequests] = useState([])
    const [requestsDetails, setRequestsDetails] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const utilsData = await getUtils();
            const moneyDeliveriesData = await getMoneyDeliveries();
            const requestsData = await getRequests();
            const requestsDetailsData = await getRequestDetails();
            setUtils(utilsData);
            setMoneyDeliveries(moneyDeliveriesData);
            setRequests(requestsData);
            setRequestsDetails(requestsDetailsData);
        } catch (err) {
            setError(err); 
            console.error("Error al obtener los salones:", err);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const getUtilesDisponibles = () => {
        let total = 0
        utils.map((supply) => total = total + supply.stock)
        return total
    }

    const getUtilesUtilizados = () => {
        let total = 0
        requests.map((solicitud) => {
            if(solicitud.status === "aceptado") {
                requestsDetails.map((detalle) => {
                    if (detalle.request_id === solicitud.request_id) {
                        total = total + detalle.quantity
                    }
                })
            }
        })
        return total
    }

    const getDineroDisponible = () => {
        const { gastos_compras } = getStatsForPurchases()
        let total = 0
        moneyDeliveries.map((detalle) => total = total + detalle.amount)
        return total - gastos_compras
    }

    const utiles_disponibles = getUtilesDisponibles()
    const utiles_utilizados = getUtilesUtilizados()
    const dinero_disponible = getDineroDisponible()

    return {
        utiles_disponibles,
        utiles_utilizados,
        dinero_disponible
    }
}

export default useGeneralStats;