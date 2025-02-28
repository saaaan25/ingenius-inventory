import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PropTypes from "prop-types";
import SuppliesDeliveryForm from "../form/SuppliesDeliveryForm";
import { useState } from "react";

const EditSuppliesDeliveryDialog = ({ open, setOpen, studentId, listaId, listaDetalles, listaUtiles }) => {
    const [title, setTitle] = useState("Lista de útiles");

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[725px] px-10 py-8 h-[85vh] flex flex-col gap-7">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <SuppliesDeliveryForm 
                    studentId={studentId} 
                    listaId={listaId} 
                    listaDetalles={listaDetalles} 
                    listaUtiles={listaUtiles} 
                    onClose={() => setOpen(false)} 
                    setTitle={setTitle}
                />
            </DialogContent>
        </Dialog>
    );
};

EditSuppliesDeliveryDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    studentId: PropTypes.number.isRequired,
    listaId: PropTypes.number.isRequired,
    listaDetalles: PropTypes.array.isRequired,
    listaUtiles: PropTypes.array.isRequired,
};

export default EditSuppliesDeliveryDialog;