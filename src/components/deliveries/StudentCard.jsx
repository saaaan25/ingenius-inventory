import { Card } from "@/components/ui/card.jsx";
import { HiX } from "react-icons/hi"; // Icono de eliminación
import PropTypes from "prop-types";
import { useStudentDeliveries } from "@/hooks/getStudentDeliveries";
import { useState } from "react";
import util_nuevo from "@/data-test/util_nuevo";
import { lista_detalles } from "@/data-test/detalleLista";
import EditSuppliesDeliveryDialog from "./EditStudentListDialog";

const StudentCard = ({ student, index, onDelete, listId }) => {
    const { tipoEntrega, totalEntregado, porcentajeEntregado } = useStudentDeliveries(student.student_id);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        console.log(`El estudiante entregó: ${tipoEntrega}`);
        console.log(`Total entregado: ${totalEntregado}`);
        console.log(`Porcentaje completado: ${porcentajeEntregado}%`);
        setOpen(true)
    }

    const detalles_de_lista = lista_detalles.filter(detail => detail.utils_list === listId)
    const utiles_info = util_nuevo.filter(util => {
        detalles_de_lista.map(detail => {
            if(detail.util === util.util_id) {
                return true
            }
        })
    })
    
    return (
        <Card className="w-full flex justify-between items-center bg-button text-button py-4 px-6" onClick={handleClick}>
            <span className="ml-5 font-bold text-base">{index}</span>
            <div className="flex-1 ml-70 text-left">
                <span className="font-normal text-base">
                    {student.name} {student.last_name}
                </span>
            </div>

            <button onClick={() => onDelete(student.student_id)} className="text-black hover:text-red-700">
                <HiX />
            </button>
            {open && ( 
                <EditSuppliesDeliveryDialog
                    open={open} 
                    setOpen={setOpen}
                    studentId={student.student_id}
                    listaId={listId}
                    listaDetalles={detalles_de_lista}
                    listaUtiles={utiles_info}
                />
            )}
        </Card>
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
