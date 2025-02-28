import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Form, FormField } from "@/components/ui/form";
import { AcceptButton, CancelButton } from "../button";
import TextInputFormItem from "./TextInputFormItem";
import { DateFormRequestItem } from "./DateFormRequestItem";
import SuppliesRequestItem from "./SuppliesRequestItem";
import Dropdown from "../ui/Dropdown";
import { useEffect, useState } from "react";
import { getClassrooms } from "@/api/classroomApi";
import { createRequest, updateRequest } from "@/api/requestApi";
import { createRequestDetail, updateRequestDetail } from "@/api/requestDetailApi";
import { useAuth } from "@/hooks";
import { date } from "zod";

const RequestForm = ({
    setSolicitudes,
    solicitudes = [],
    setDetalleSolicitud,
    detalleSolicitud = [],
    handleCloseDialog,
    initialData = null,
}) => {
    const [classrooms, setClassrooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    // Obtener la lista de salones
    const fetchData = async () => {
        setLoading(true);
        try {
            const classroomsData = await getClassrooms();
            setClassrooms(classroomsData);
        } catch (err) {
            setError(err);
            console.error("Error al obtener los salones:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(classrooms)

    // Opciones para el dropdown de salones
    const classroomOptions = classrooms.map((item) => ({
        id: item.id, // Usar classroom_id como valor
        nombre: item.name, // Mostrar el nombre en el dropdown
    }));

    console.log(classroomOptions)

    // Configuración del formulario
    const form = useForm({
        defaultValues: initialData || {
            user: user.id, // Usar el ID del usuario autenticado
            classroom: "", // Usar classroom en lugar de classroom_id
            date: new Date().toISOString(),
            justification: "",
            status: "pendiente",
            request_details: [],
        },
    });

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            console.log(data.request_details)
            console.log(data.classroom)
            // Verificar que el valor de classroom sea un UUID válido
            if (!data.classroom || typeof data.classroom !== "string" || !isValidUUID(data.classroom)) {
                throw new Error("El valor de classroom no es un UUID válido.");
            }

            if (initialData) {
                // Editar una solicitud existente
                const updatedRequest = await updateRequest({
                    request_id: initialData.request_id,
                    ...data,
                });

                // Actualizar los detalles de la solicitud
                const updatedDetails = await Promise.all(
                    data.request_details.map(async (detail) => {
                        console.log(detail)
                        if (detail.request_detail_id) {
                            // Si el detalle ya existe, actualízalo
                            return await updateRequestDetail({
                                request_detail_id: detail.request_detail_id,
                                util: detail.util.id,
                                ...detail,
                            });
                        } else {
                            // Si el detalle es nuevo, créalo
                            return await createRequestDetail({
                                ...detail,
                                request_id: initialData.request_id,
                            });
                        }
                    })
                );

                // Actualizar el estado local
                setSolicitudes((prev) =>
                    prev.map((req) =>
                        req.request_id === initialData.request_id ? updatedRequest : req
                    )
                );
                setDetalleSolicitud((prev) => [
                    ...prev.filter((detail) =>
                        updatedDetails.some((d) => d.request_detail_id === detail.request_detail_id)
                    ),
                    ...updatedDetails,
                ]);
            } else {
                const req = {
                    justification: data.justification,
                    date: data.date,
                    status: data.status,
                    user: data.user,
                    classroom: data.classroom
                }
                const newRequest = await createRequest(req);
                console.log(newRequest)

                // Crear los detalles de la solicitud
                const newDetails = await Promise.all(
                    data.request_details.map(async (detail) => {
                        return await createRequestDetail({
                            quantity: detail.quantity,
                            util: detail.util.id,
                            request: newRequest.id,
                        });
                    })
                );

                // Actualizar el estado local
                setSolicitudes((prev) => [...prev, newRequest]);
                setDetalleSolicitud((prev) => [...prev, ...newDetails]);
            }

            // Cerrar el diálogo
            handleCloseDialog();
        } catch (err) {
            console.error("Error al guardar la solicitud:", err);
            alert("Ocurrió un error al guardar la solicitud. Por favor, inténtalo de nuevo.");
        }
    };

    // Función para validar UUID
    const isValidUUID = (uuid) => {
        const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        return uuidRegex.test(uuid);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 flex flex-col h-full"
            >
                <FormField
                    control={form.control}
                    name="classroom" // Usar classroom
                    render={({ field }) => (
                        <Dropdown
                            options={classroomOptions}
                            onChange={(e) => field.onChange(e.target.value)} // Pasar el ID seleccionado
                            selectedValue={field.value}
                            defaultLabel="Elige un salón"
                        />
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => <DateFormRequestItem label="Date" field={field} />}
                />
                <FormField
                    control={form.control}
                    name="justification"
                    render={({ field }) => (
                        <TextInputFormItem label="Activity" field={field} />
                    )}
                />
                <FormField
                    control={form.control}
                    name="request_details"
                    render={({ field }) => <SuppliesRequestItem field={field} form={form} />}
                />
                <div className="flex justify-center gap-x-10 mt-auto">
                    <AcceptButton type="submit">
                        {initialData ? "Save Changes" : "Accept"}
                    </AcceptButton>
                    <CancelButton onClick={handleCloseDialog}>Cancel</CancelButton>
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