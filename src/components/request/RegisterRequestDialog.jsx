import { DialogContent, DialogHeader, DialogTitle, DialogDescription, Dialog } from "@/components/ui/dialog";
import AddRequestForm from "@/components/form/RequestForm";
import PropTypes from "prop-types";
import detalle_solicitud from "@/data-test/detalle_solicitud";
import { useState } from "react";

const RegisterRequestDialog = ({ open, setOpen, setSolicitudes, solicitudes }) => {
    const [detalleSolicitud, setDetalleSolicitud] = useState(detalle_solicitud);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[725px] px-10 py-8 h-[85vh] flex flex-col gap-7">
                <DialogHeader>
                    <DialogTitle>
                        <DialogDescription className="text-primary text-lg">
                            Solicitar material
                        </DialogDescription>
                    </DialogTitle>
                </DialogHeader>
                <AddRequestForm 
                    setSolicitudes={setSolicitudes} 
                    solicitudes={solicitudes} 
                    setDetalleSolicitud={setDetalleSolicitud}
                    detalleSolicitud={detalleSolicitud}
                    handleCloseDialog={() => setOpen(false)} 
                />
            </DialogContent>
        </Dialog>
    );
};

RegisterRequestDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    setSolicitudes: PropTypes.func.isRequired,
    solicitudes: PropTypes.array.isRequired
};

export default RegisterRequestDialog;
