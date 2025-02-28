import { DialogContent, DialogHeader, DialogTitle, DialogDescription, Dialog } from "@/components/ui/dialog";
import PropTypes from "prop-types";
import { useState } from "react";
import RequestForm from "@/components/form/RequestForm";
import request_details_nuevo from "@/data-test/detalle_solicitud_nuevo";

const RegisterRequestDialog = ({ open, setOpen, setSolicitudes, solicitudes }) => {
    const [detalleSolicitud, setDetalleSolicitud] = useState(request_details_nuevo);
    console.log(solicitudes, setSolicitudes)
    
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
                <RequestForm
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
