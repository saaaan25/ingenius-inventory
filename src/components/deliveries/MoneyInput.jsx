import { useState } from "react";
import entregas from "@/data-test/entrega";
import { entrega_dinero } from "@/data-test/entregaDinero";
import { lista_utiles } from "@/data-test/listaUtiles";

const MoneyInput = ({ studentId, listId }) => {
    const [monto, setMonto] = useState(0);

    // Filtrar la lista de útiles para encontrar el monto total
    const montoTotal = lista_utiles.find(lista => lista.util_list_id === listId)?.total || 0;

    // Obtener entregas de dinero asociadas
    const dineroEntregado = entrega_dinero
        .filter(dinero => entregas.some(entrega => entrega.delivery_id === dinero.delivery_id))
        .reduce((sum, item) => sum + item.amount, 0);

    const handleAddMoney = () => {
        if (monto > 0) {
            console.log(`Estudiante ${studentId} entregó $${monto}`);
            setMonto(0);
        }
    };

    return (
        <div>
            <h3 className="font-semibold mb-2">Entrega de Dinero</h3>
            <p>Total a entregar: ${montoTotal}</p>
            <p>Entregado hasta ahora: ${dineroEntregado}</p>
            <input 
                type="number" 
                value={monto} 
                onChange={(e) => setMonto(Number(e.target.value))} 
                className="border p-2 rounded w-full"
            />
            <button 
                onClick={handleAddMoney} 
                className="bg-green-500 text-white p-2 rounded mt-2"
            >
                Añadir dinero
            </button>
        </div>
    );
};

export default MoneyInput;
