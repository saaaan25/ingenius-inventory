import compras from "@/data-test/compra"
import detalle_compras from "@/data-test/detalle_compra"

const getStatsForPurchases = () => {
    const total_compras = compras.length

    const getUtilesComprados = () => {
        let total = 0
        detalle_compras.map((detalle) => total = total + detalle.cantidad)
        return total
    }

    const getGastosCompras = () => {
        let total = 0
        compras.map((compra) => total = total + compra.total_gastado)
        return total
    }

    const utiles_comprados = getUtilesComprados()
    const gastos_compras = getGastosCompras()

    return {
        total_compras,
        utiles_comprados,
        gastos_compras
    }
}

export default getStatsForPurchases;