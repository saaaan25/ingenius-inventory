import detalle_solicitud from "@/data-test/detalle_solicitud"
import solicitudes from "@/data-test/solicitud"
import supplies from "@/data-test/supplies"
import getStatsForPurchases from "./getStatsForPurchases"
import detalle_entrega from "@/data-test/detalle_entrega"

const getGeneralStats = () => {
    const getUtilesDisponibles = () => {
        let total = 0
        supplies.map((supply) => total = total + supply.quantity)
        return total
    }

    const getUtilesUtilizados = () => {
        let total = 0
        solicitudes.map((solicitud) => {
            if(solicitud.estado === "aceptado") {
                detalle_solicitud.map((detalle) => {
                    if (detalle.solicitud === solicitud.id) {
                        total = total + detalle.cantidad
                    }
                })
            }
        })
        return total
    }

    const getDineroDisponible = () => {
        const { gastos_compras } = getStatsForPurchases()
        let total = 0
        detalle_entrega.map((detalle) => total = total + detalle.monto)
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