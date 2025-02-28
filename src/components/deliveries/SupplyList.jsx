import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

const SupplyList = ({ listaDetalles }) => {
    const [entregaEstado, setEntregaEstado] = useState(
        listaDetalles.reduce((acc, item) => ({ ...acc, [item.util]: false }), {})
    );

    const toggleEntrega = (utilId) => {
        setEntregaEstado((prev) => ({ ...prev, [utilId]: !prev[utilId] }));
    };

    return (
        <ScrollArea className="h-32">
            <ul>
                {listaDetalles.map((item) => (
                    <li key={item.util} className="flex items-center gap-2">
                        <input 
                            type="checkbox" 
                            checked={entregaEstado[item.util]} 
                            onChange={() => toggleEntrega(item.util)} 
                        />
                        {item.util} (x{item.quantity})
                    </li>
                ))}
            </ul>
        </ScrollArea>
    );
};

export default SupplyList;