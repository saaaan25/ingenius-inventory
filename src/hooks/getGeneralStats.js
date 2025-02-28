import getStatsForPurchases from "./getStatsForPurchases"
import util_nuevo from "@/data-test/util_nuevo"
import requests_nuevo from "@/data-test/solicitud_nuevo"
import request_details_nuevo from "@/data-test/detalle_solicitud_nuevo"
import { entrega_dinero } from "@/data-test/entregaDinero"
import { getUtils } from "@/api"
import { useState } from "react"

const useGeneralStats = () => {
    const [utils, setUtils] = useState([])
    const [purchases, setPurchase] = useState([])
    const [requests, setRequests] = useState([])
    const [requestsDetails, setRequestsDetails] = useState([])

    const fetchData = async () => {
        try {
            const utilsData = await getUtils();
            const utilsData = await getUtils();
            const utilsData = await getUtils();
            const utilsData = await getUtils();
            setClassrooms(classroomsData);
        } catch (err) {
            setError(err); // Guardar el error en el estado
            console.error("Error al obtener los salones:", err);
        } finally {
            setLoading(false); // Desactivar el estado de carga
        }
    };

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

export default getGeneralStats;