import { useState, useEffect } from "react";
import SupplyList from "../deliveries/SupplyList";
import MoneyInput from "../deliveries/MoneyInput";
import { AcceptButton, CancelButton } from "../button";
import { useStudentDeliveries } from "@/hooks/getStudentDeliveries";

const SuppliesDeliveryForm = ({ studentId, listaId, listaDetalles, listaUtiles, onClose, setTitle }) => {
    const { tipoEntrega } = useStudentDeliveries(studentId);
    const [selectedOption, setSelectedOption] = useState(tipoEntrega || "Sin entrega");

    useEffect(() => {
        if (selectedOption === "Útiles") setTitle("Entrega de útiles");
        if (selectedOption === "Dinero") setTitle("Entrega de dinero");
    }, [selectedOption, setTitle]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Entrega registrada");
        onClose();
    };

    return (
        <div>
            {selectedOption === "Sin entrega" ? (
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setSelectedOption("Útiles")}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Entregar Útiles
                    </button>
                    <button
                        onClick={() => setSelectedOption("Dinero")}
                        className="bg-green-500 text-white p-2 rounded"
                    >
                        Entregar Dinero
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {selectedOption === "Útiles" && (
                        <SupplyList studentId={studentId} listaDetalles={listaDetalles} />
                    )}
                    {selectedOption === "Dinero" && (
                        <MoneyInput studentId={studentId} listId={listaId} />
                    )}
                    <div className="flex gap-x-3 w-full justify-center">
                        <AcceptButton type="submit">Guardar</AcceptButton>
                        <CancelButton onClick={onClose}>Cancelar</CancelButton>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SuppliesDeliveryForm;