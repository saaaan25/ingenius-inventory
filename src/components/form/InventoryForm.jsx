import { useState } from "react";
import { AcceptButton, CancelButton } from "../button";
import { DialogDescription } from "@radix-ui/react-dialog";

const InventoryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 flex flex-col h-full">
        <DialogDescription className="text-primary text-lg pt-4">
            Descripción del material
        </DialogDescription>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border border-secondary_line p-2 w-full"
      />
        <DialogDescription className="text-primary text-lg pt-4">
            Cantidad    
        </DialogDescription>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="border border-secondary_line p-2 w-full"

      />
      <div className="flex justify-center gap-x-10 mt-auto pt-5">
                <AcceptButton type="submit">Aceptar</AcceptButton>
                <CancelButton onClick={() => handleCloseDialog()}>
                  Cancelar
                </CancelButton>
              </div>
    </form>
  );
};

export { InventoryForm };
