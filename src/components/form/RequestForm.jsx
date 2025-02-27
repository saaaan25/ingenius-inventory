import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Form, FormField } from "@/components/ui/form";
import { AcceptButton, CancelButton } from "../button";
import TextInputFormItem from "./TextInputFormItem";
import { DateFormRequestItem } from "./DateFormRequestItem";
import SuppliesRequestItem from "./SuppliesRequestItem";

const RequestForm = ({ 
    setSolicitudes, 
    solicitudes, 
    setDetalleSolicitud, 
    detalleSolicitud, 
    handleCloseDialog, 
    initialData = null 
}) => {
    const form = useForm({
        defaultValues: initialData || {
            usuario: 103,
            aula: "",
            fecha: new Date().toISOString().split("T")[0], 
            justificacion: "",
            detalle_solicitud: [],
        },
    });

    const onSubmit = (data) => {
        console.log("Formulario enviado con los siguientes datos:", data);
    
        if (initialData) {
            const updatedSolicitudes = solicitudes.map((req) => 
                req.id === initialData.id ? { ...req, ...data } : req
            );
            setSolicitudes(updatedSolicitudes);
    
            const currentDetalles = detalleSolicitud.filter(
                (detalle) => detalle.solicitud === initialData.id
            );
    
            const nuevosDetalles = data.detalle_solicitud.map((detalle) => ({
                id: detalle.id || null, 
                solicitud: initialData.id,
                util: detalle.util?.id ?? detalle.util, 
                cantidad: detalle.cantidad,
            }));
    
            const idsNuevos = nuevosDetalles.map((d) => d.id).filter(Boolean);
            const detallesFiltrados = currentDetalles.filter(
                (detalle) => idsNuevos.includes(detalle.id)
            );
    
            const nuevosDetallesConID = nuevosDetalles.map((detalle, index) => ({
                ...detalle,
                id: detalle.id ?? detalleSolicitud.length + index + 1, 
            }));
    
            setDetalleSolicitud([...detallesFiltrados, ...nuevosDetallesConID]);
    
            console.log("Detalle de solicitud actualizado:", [...detallesFiltrados, ...nuevosDetallesConID]);
        } else {
            const newRequestId = solicitudes.length + 1;
    
            const newRequest = {
                id: newRequestId,
                usuario: data.usuario,
                aula: data.aula,
                fecha: data.fecha,
                justificacion: data.justificacion,
                estado: "pendiente",
            };
    
            setSolicitudes((prev) => [...prev, newRequest]);
    
            const newDetalleSolicitud = data.detalle_solicitud.map((detalle, index) => ({
                id: detalleSolicitud.length + index + 1,
                solicitud: newRequestId,
                util: detalle.util?.id ?? detalle.util,
                cantidad: detalle.cantidad,
            }));
    
            setDetalleSolicitud((prev) => [...prev, ...newDetalleSolicitud]);
    
            console.log("Nueva solicitud añadida:", newRequest);
            console.log("Nuevo detalle de solicitud añadido:", newDetalleSolicitud);
        }
    
        handleCloseDialog();
    };    

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 flex flex-col h-full"
            >
                <FormField
                    control={form.control}
                    name="aula"
                    render={({ field }) => <TextInputFormItem label="Aula" field={field} />}
                />
                <FormField
                    control={form.control}
                    name="fecha"
                    render={({ field }) => <DateFormRequestItem label="Fecha" field={field} />}
                />
                <FormField
                    control={form.control}
                    name="justificacion"
                    render={({ field }) => (
                        <TextInputFormItem label="Actividad" field={field} />
                    )}
                />
                <FormField
                    control={form.control}
                    name="detalle_solicitud"
                    render={({ field }) => <SuppliesRequestItem field={field} form={form} />}
                />
                <div className="flex justify-center gap-x-10 mt-auto">
                    <AcceptButton type="submit">{initialData ? "Guardar cambios" : "Aceptar"}</AcceptButton>
                    <CancelButton onClick={handleCloseDialog}>Cancelar</CancelButton>
                </div>
            </form>
        </Form>
    );
};

RequestForm.propTypes = {
    setSolicitudes: PropTypes.func.isRequired,
    solicitudes: PropTypes.array.isRequired,
    setDetalleSolicitud: PropTypes.func.isRequired,
    detalleSolicitud: PropTypes.array.isRequired,
    handleCloseDialog: PropTypes.func.isRequired,
    initialData: PropTypes.object,
};

export default RequestForm;