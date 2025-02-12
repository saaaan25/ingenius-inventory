import { FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Trash2 } from "lucide-react";

export const SupplyCardForm = ({ index, fieldItem, form }) => {
  const handleCantidadChange = (e) => {
    const newCantidad = parseInt(e.target.value, 10);
    const updatedDetalleCompra = form
      .getValues("detalle_compra")
      .map((item, i) =>
        i === index ? { ...item, cantidad: newCantidad } : item
      );
    form.setValue("detalle_compra", updatedDetalleCompra);
  };

  const handlePrecioUnitarioChange = (e) => {
    const newPrecioUnitario = parseFloat(e.target.value);
    const updatedDetalleCompra = form
      .getValues("detalle_compra")
      .map((item, i) =>
        i === index ? { ...item, precio_unitario: newPrecioUnitario } : item
      );
    form.setValue("detalle_compra", updatedDetalleCompra);
  };

  const handleDelete = () => {
    const updatedDetalleCompra = form
      .getValues("detalle_compra")
      .filter((_, i) => i !== index);
    form.setValue("detalle_compra", updatedDetalleCompra);
  };

  return (
    <div>
      <div>{fieldItem.nombre}</div>
      <FormItem>
        <FormLabel>Cantidad</FormLabel>
        <FormControl>
          <Input
            type="number"
            min="1"
            value={fieldItem.cantidad}
            onChange={handleCantidadChange}
          />
        </FormControl>
      </FormItem>
      <FormItem>
        <FormLabel>Precio Unitario</FormLabel>
        <FormControl>
          <Input
            type="number"
            min="0"
            value={fieldItem.precio_unitario}
            onChange={handlePrecioUnitarioChange}
          />
        </FormControl>
      </FormItem>
      <div onClick={handleDelete} className="cursor-pointer">
        <Trash2 />
      </div>
    </div>
  );
};
