import { Card } from "@/components/ui/card.jsx";
import { HiX } from "react-icons/hi";
import PropTypes from "prop-types";
import { useStudentDeliveries } from "@/hooks/getStudentDeliveries";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Checkbox from "@/components/ui/Checkbox";
import { lista_detalles } from "@/data-test/detalleLista";
import entregas from "@/data-test/entrega";
import util_nuevo from "@/data-test/util_nuevo";
import { ScrollArea } from "../ui/scroll-area";

const StudentCard = ({ student, index, onDelete, listId }) => {
    const { tipoEntrega, totalEntregado, porcentajeEntregado } = useStudentDeliveries(student.student_id);
    const [isOpen, setIsOpen] = useState(false);
    const [deliveries, setDeliveries] = useState(entregas.filter(entrega => entrega.student_id === student.student_id));

    console.log("listId recibido en StudentCard:", listId); // Depuración

    const utilsList = lista_detalles
        .filter(detail => detail.utils_list === listId)
        .map(detail => {
            const matchedUtil = util_nuevo.find(util => util.util_id === detail.util);
            return {
                ...detail,
                name: matchedUtil?.name || "Desconocido"
            };
        });

    console.log("Lista de útiles para el estudiante:", utilsList);

    const toggleDelivery = (util_id) => {
        setDeliveries((prevDeliveries) => {
            const exists = prevDeliveries.some(entrega => entrega.util_id === util_id);
            return exists
                ? prevDeliveries.filter(entrega => entrega.util_id !== util_id)
                : [...prevDeliveries, { student_id: student.student_id, util_id }];
        });
    };

    return (
        <>
            <Card className="w-full flex justify-between items-center bg-button text-button py-4 px-6 cursor-pointer" onClick={() => setIsOpen(true)}>
                <span className="ml-5 font-bold text-base">{index}</span>
                <div className="flex-1 ml-70 text-left">
                    <span className="font-normal text-base">
                        {student.name} {student.last_name}
                    </span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); onDelete(student.student_id); }} className="text-black hover:text-red-700">
                    <HiX />
                </button>
            </Card>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className="sm:max-w-[500px] px-8 py-6 bg-secondary">
        <DialogHeader>
            <DialogTitle>Útiles de {student.name} {student.last_name}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-80 w-full overflow-y-auto border border-gray-300 rounded-md p-2">
            <div className="flex flex-col gap-3">
                {utilsList.length > 0 ? (
                    utilsList.map(util => (
                        <label key={util.util} className="flex items-center gap-3">
                            <Checkbox 
                                checked={deliveries.some(entrega => entrega.util_id === util.util)}
                                onCheckedChange={() => toggleDelivery(util.util)}
                            />
                            <span>{util.name}</span>
                        </label>
                    ))
                ) : (
                    <p className="text-gray-500">No hay útiles registrados para esta lista.</p>
                )}
            </div>
        </ScrollArea> {/* Fin del Scroll */}
    </DialogContent>
</Dialog>
        </>
    );
};

StudentCard.propTypes = {
    student: PropTypes.shape({
        student_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    listId: PropTypes.any.isRequired
};

export default StudentCard;
