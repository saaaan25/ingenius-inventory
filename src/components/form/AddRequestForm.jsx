import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Form, FormField } from "@/components/ui/form";
import { AcceptButton, CancelButton } from "../button";
import TextInputFormItem from "./TextInputFormItem";
import { DateFormRequestItem } from "./DateFormRequestItem";
import { SuppliesRequestItem } from "./SuppliesRequestItem";

const AddRequestForm = ({ setSolicitudes, solicitudes, setDetalleSolicitud, detalleSolicitud, handleCloseDialog }) => {
    const form = useForm({
        defaultValues: {
        usuario: 103,
        aula: "",
        fecha: new Date().toISOString().split("T")[0], 
        justificacion: "",
        detalle_solicitud: [],
        },
    });

    const onSubmit = (data) => {
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
            util: detalle.util,
            cantidad: detalle.cantidad,
        }));

        setDetalleSolicitud((prev) => [...prev, ...newDetalleSolicitud]);

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
                    <AcceptButton type="submit">Aceptar</AcceptButton>
                    <CancelButton onClick={handleCloseDialog}>Cancelar</CancelButton>
                </div>
            </form>
        </Form>
    );
};

AddRequestForm.propTypes = {
    setSolicitudes: PropTypes.func.isRequired,
    solicitudes: PropTypes.array.isRequired,
    setDetalleSolicitud: PropTypes.func.isRequired,
    detalleSolicitud: PropTypes.array.isRequired,
    handleCloseDialog: PropTypes.func.isRequired,
};

export default AddRequestForm;
