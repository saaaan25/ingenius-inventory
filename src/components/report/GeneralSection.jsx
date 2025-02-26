import getGeneralStats from "@/hooks/getGeneralStats";
import SummaryItem from "./SummaryItem";
import { FaEraser, FaDollarSign } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const GeneralSection = () => {
    const { utiles_disponibles, utiles_utilizados, dinero_disponible } = getGeneralStats()
    
    const resumen_general = [
        {
            Icon: FaEraser,
            data: utiles_disponibles,
            details: "Útiles disponibles"
        },
        {
            Icon: GiOpenBook,
            data: utiles_utilizados,
            details: "Útiles utilizados"
        },
        {
            Icon: FaDollarSign,
            data: "S/. " + dinero_disponible,
            details: "Dinero disponible"
        }
    ]

    return (
        <div className="flex flex-col gap-y-7">
            <h2 className="font-bold flex items-start">Resumen general</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 px-10">
                {resumen_general.map((item) => (
                    <SummaryItem key={item.details} Icon={item.Icon} data={item.data} details={item.details} />
                ))}
            </div>
        </div>
    );
}
 
export default GeneralSection;