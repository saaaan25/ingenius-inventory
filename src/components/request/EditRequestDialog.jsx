import { DialogContent, DialogHeader, DialogTitle, DialogDescription, Dialog } from "@/components/ui/dialog";
import PropTypes from "prop-types";
import { useState } from "react";
import RequestForm from "../form/RequestForm";
import request_details_nuevo from "@/data-test/detalle_solicitud_nuevo";

const EditRequestDialog = ({ open, setOpen, setSolicitudes, solicitudes, solicitud }) => {
    const [detalleSolicitud, setDetalleSolicitud] = useState(
        request_details_nuevo.filter(ds => ds.request_id === solicitud.request_id)
    );
    console.log(solicitudes, setSolicitudes)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[725px] px-10 py-8 min-h-[30vh] flex flex-col gap-7">
                <DialogHeader>
                    <DialogTitle>
                        <DialogDescription className="text-primary text-lg">
                            Editar solicitud
                        </DialogDescription>
                    </DialogTitle>
                </DialogHeader>
                <RequestForm
                    setSolicitudes={setSolicitudes} 
                    solicitudes={solicitudes} 
                    setDetalleSolicitud={setDetalleSolicitud} 
                    detalleSolicitud={detalleSolicitud} 
                    handleCloseDialog={() => setOpen(false)} 
                    initialData={{
                        ...solicitud,
                        fecha: solicitud.fecha ? solicitud.fecha.split("T")[0] : "",
                        detalle_solicitud: detalleSolicitud,
                    }} 
                />
            </DialogContent>
        </Dialog>
    );
};

EditRequestDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    setSolicitudes: PropTypes.func.isRequired,
    solicitudes: PropTypes.array.isRequired,
    solicitud: PropTypes.object.isRequired,
};

export default EditRequestDialog;