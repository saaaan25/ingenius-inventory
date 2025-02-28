import { FaDollarSign, FaShoppingBag } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import SummaryItem from "./SummaryItem";
import useStatsForPurchases from "@/hooks/getStatsForPurchases";

const PurchasesSection = () => {
    const { total_compras, utiles_comprados, gastos_compras } = useStatsForPurchases()
    const resumen_compras = [
        {
            Icon: FaShoppingBag,
            data: total_compras,
            details: "Total de compras"
        },
        {
            Icon: GiOpenBook,
            data: utiles_comprados,
            details: "Útiles comprados"
        },
        {
            Icon: FaDollarSign,
            data: "S/. " + gastos_compras,
            details: "Gastos en compras"
        }
    ]

    return (
        <div className="flex flex-col gap-y-7">
            <h2 className="font-bold flex items-start">Resumen de compras</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 px-10">
                    {resumen_compras.map((item) => (
                        <SummaryItem key={item.details} Icon={item.Icon} data={item.data} details={item.details} />
                ))}
            </div>
        </div>
    );
}
 
export default PurchasesSection;