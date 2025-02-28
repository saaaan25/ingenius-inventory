import { getPurchaseDetails, getPurchases } from "@/api"
import { useEffect, useState } from "react"

const useStatsForPurchases = () => {
    const [purchases, setPurchases] = useState([])
    const [purchasesDetails, setPurchasesDetails] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const purchasesData = await getPurchases();
            const purchasesDetailsData = await getPurchaseDetails();
            setPurchases(purchasesData);
            setPurchasesDetails(purchasesDetailsData);
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

    const total_compras = purchases.length
    console.log(purchases)

    const getUtilesComprados = () => {
        let total = 0
        purchasesDetails.map((detalle) => total = total + detalle.unit_price * detalle.quantity)
        return total
    }

    const getGastosCompras = () => {
        let total = 0
        purchases.map((compra) => total = total + Number(compra.total_spent))
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

export default useStatsForPurchases;