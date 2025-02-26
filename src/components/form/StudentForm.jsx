import { useState } from "react";
import { AcceptButton, CancelButton } from "@/components/button";
import { DialogDescription } from "@radix-ui/react-dialog";

const StudentForm = ({ onSubmit, handleCloseDialog }) => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.nombre) return;
        onSubmit({ id: Date.now(), ...formData });
        handleCloseDialog();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 flex flex-col h-full">
            <DialogDescription className="text-primary text-lg pt-4">
                Nombre del estudiante
            </DialogDescription>
            <input 
                type="text" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                className="border border-secondary_line p-2 w-full"
            />
            <DialogDescription className="text-primary text-lg pt-4">
                Apellido del estudiante
            </DialogDescription>
            <input 
                type="text" 
                name="apellido" 
                value={formData.apellido} 
                onChange={handleChange} 
                className="border border-secondary_line p-2 w-full"
            />
            <div className="flex justify-center gap-x-10 mt-auto pt-5">
                <AcceptButton type="submit">Aceptar</AcceptButton>
                <CancelButton onClick={handleCloseDialog}>Cancelar</CancelButton>
            </div>
        </form>
    );
};

export default StudentForm;

