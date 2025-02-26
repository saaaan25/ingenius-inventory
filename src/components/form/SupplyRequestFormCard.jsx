import { FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { Trash2 } from "lucide-react";

export const SupplyRequestFormCard = ({ index, fieldItem, form }) => {
  const handleCantidadChange = (e) => {
    const newCantidad = parseInt(e.target.value, 10) || 1;
    const updatedDetalleSolicitud = form
      .getValues("detalle_solicitud")
      .map((item, i) =>
        i === index ? { ...item, cantidad: newCantidad } : item
      );
    form.setValue("detalle_solicitud", updatedDetalleSolicitud);
  };

  const handleDelete = () => {
    const updatedDetalleSolicitud = form
      .getValues("detalle_solicitud")
      .filter((_, i) => i !== index);
    form.setValue("detalle_solicitud", updatedDetalleSolicitud);
  };

  return (
    <div className="flex justify-between items-center border rounded-md border-zinc-200 px-4 py-2 bg-button text-button">
      <div className="w-40">{fieldItem.util.nombre}</div>
      <div className="flex-auto flex text-zinc-400 items-center">
        <FormItem className="flex flex-1/2 justify-center px-4">
          <FormControl>
            <Input
              type="number"
              min="1"
              value={fieldItem.cantidad}
              onChange={handleCantidadChange}
              className="w-14 h-8"
            />
          </FormControl>
          <FormLabel className="flex items-center">
            {fieldItem.cantidad === 1 ? "unidad" : "unidades"}
          </FormLabel>
        </FormItem>
      </div>
      <div onClick={handleDelete} className="cursor-pointer">
        <Trash2 size={20} />
      </div>
    </div>
  );
};
