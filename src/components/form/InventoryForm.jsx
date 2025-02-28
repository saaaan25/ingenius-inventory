import { useEffect, useState } from "react";
import { AcceptButton, CancelButton } from "../button";
import { DialogDescription } from "../ui/dialog";

const InventoryForm = ({ onSubmit, handleCloseDialog, initialData }) => {
  const [formData, setFormData] = useState({
      name: initialData?.name || "",
      quantity: initialData?.stock || 0, // Usa stock en lugar de quantity
  });

  // Asegura que el formulario se actualice cuando cambie `initialData`
  useEffect(() => {
      if (initialData) {
          setFormData({
              name: initialData.name,
              quantity: initialData.stock,
          });
      }
  }, [initialData]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: name === "quantity" ? Number(value) : value });
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
              <CancelButton onClick={handleCloseDialog}>Cancelar</CancelButton>
          </div>
      </form>
  );
};

export default InventoryForm;