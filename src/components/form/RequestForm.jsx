import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Form, FormField } from "@/components/ui/form";
import { AcceptButton, CancelButton } from "../button";
import TextInputFormItem from "./TextInputFormItem";
import { DateFormRequestItem } from "./DateFormRequestItem";
import SuppliesRequestItem from "./SuppliesRequestItem";
import Dropdown from "../ui/Dropdown";
import { classes } from "@/data-test/class";

const RequestForm = ({ 
    setSolicitudes, 
    solicitudes = [], 
    setDetalleSolicitud, 
    detalleSolicitud = [], 
    handleCloseDialog, 
    initialData = null 
}) => {
    const classroomOptions = classes.map(item => ({
        id: item.classroom_id,
        nombre: item.name 
    }));

    console.log(solicitudes, setSolicitudes)

    const form = useForm({
        defaultValues: initialData || {
            user: 103,
            classroom: "",
            date: new Date().toISOString().split("T")[0], 
            justification: "",
            request_details: [],
        },
    });

    const onSubmit = (data) => {
        console.log("Form submitted with data:", data);
    
        if (initialData) {
            const updatedRequests = solicitudes.map((req) => 
                req.request_id === initialData.request_id ? { ...req, ...data } : req
            );
            setSolicitudes(updatedRequests);
    
            const currentDetails = detalleSolicitud.filter(
                (detail) => detail.request_id === initialData.request_id
            );
    
            const newDetails = data.request_details.map((detail) => ({
                request_detail_id: detail.request_detail_id || null, 
                request_id: initialData.request_id,
                util_id: detail.util?.id ?? detail.util, 
                quantity: detail.quantity,
            }));
    
            const newIds = newDetails.map((d) => d.request_detail_id).filter(Boolean);
            const filteredDetails = currentDetails.filter(
                (detail) => newIds.includes(detail.request_detail_id)
            );
    
            const newDetailsWithID = newDetails.map((detail, index) => ({
                ...detail,
                request_detail_id: detail.request_detail_id ?? detalleSolicitud.length + index + 1, 
            }));
    
            setDetalleSolicitud([...filteredDetails, ...newDetailsWithID]);
    
            console.log("Updated request details:", [...filteredDetails, ...newDetailsWithID]);
        } else {
            const newRequestId = (solicitudes?.length || 0) + 1;
    
            const newRequest = {
                request_id: newRequestId,
                user: data.user,
                classroom: data.classroom,
                date: data.date,
                justification: data.justification,
                status: "pending",
            };
    
            setSolicitudes((prev) => [...prev, newRequest]);
    
            const newRequestDetails = data.request_details.map((detail, index) => ({
                request_detail_id: detalleSolicitud.length + index + 1,
                request_id: newRequestId,
                util_id: detail.util?.id ?? detail.util,
                quantity: detail.quantity,
            }));
    
            setDetalleSolicitud((prev) => [...prev, ...newRequestDetails]);

            console.log("New request added:", newRequest);
            console.log("New request details added:", newRequestDetails);
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
                    name="classroom"
                    render={({ field }) => (
                        <Dropdown 
                            options={classroomOptions} 
                            onChange={(e) => field.onChange(e.target.value)} 
                            selectedValue={field.value} 
                            defaultLabel="Select a classroom" 
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
                    <AcceptButton type="submit">{initialData ? "Save Changes" : "Accept"}</AcceptButton>
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