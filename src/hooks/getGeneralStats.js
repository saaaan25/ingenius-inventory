import getStatsForPurchases from "./getStatsForPurchases"
import util_nuevo from "@/data-test/util_nuevo"
import requests_nuevo from "@/data-test/solicitud_nuevo"
import request_details_nuevo from "@/data-test/detalle_solicitud_nuevo"
import { entrega_dinero } from "@/data-test/entregaDinero"
import { getPurchases, getUtils } from "@/api"
import { useEffect, useState } from "react"
import { getRequestDetails } from "@/api/requestDetailApi"
import { getRequests } from "@/api/requestApi"

const useGeneralStats = () => {
    const [utils, setUtils] = useState([])
    const [purchases, setPurchases] = useState([])
    const [requests, setRequests] = useState([])
    const [requestsDetails, setRequestsDetails] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const utilsData = await getUtils();
            const purchasesData = await getPurchases();
            const requestsData = await getRequests();
            const requestsDetailsData = await getRequestDetails();
            setUtils(utilsData);
            setPurchases(purchasesData);
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
        util_nuevo.map((supply) => total = total + supply.stock)
        return total
    }

    const getUtilesUtilizados = () => {
        let total = 0
        requests_nuevo.map((solicitud) => {
            if(solicitud.status === "aceptado") {
                request_details_nuevo.map((detalle) => {
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
        entrega_dinero.map((detalle) => total = total + detalle.amount)
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