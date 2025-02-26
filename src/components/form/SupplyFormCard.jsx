import { FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { Trash2 } from "lucide-react";

export const SupplyFormCard = ({ index, fieldItem, form }) => {
  const handleCantidadChange = (e) => {
    const newCantidad = parseInt(e.target.value, 10);
    const updatedDetalleCompra = form
      .getValues("purchase_detail")
      .map((item, i) =>
        i === index ? { ...item, quantity: newCantidad } : item
      );
    form.setValue("purchase_detail", updatedDetalleCompra);
  };

  const handlePrecioUnitarioChange = (e) => {
    const newPrecioUnitario = parseFloat(e.target.value);
    const updatedDetalleCompra = form
      .getValues("purchase_detail")
      .map((item, i) =>
        i === index ? { ...item, unit_price: newPrecioUnitario } : item
      );
    form.setValue("purchase_detail", updatedDetalleCompra);
  };

  const handleDelete = () => {
    const updatedDetalleCompra = form
      .getValues("purchase_detail")
      .filter((_, i) => i !== index);
    form.setValue("purchase_detail", updatedDetalleCompra);
  };

  return (
    <div className="flex justify-between items-center border rounded-md border-zinc-200 px-4 py-2 bg-button text-button">
      <div className="w-40">{fieldItem.util.name}</div>
      <div className="flex-auto flex text-zinc-400 items-center ">
        <FormItem className="flex flex-1/2 justify-center px-4">
          <FormControl>
            <Input
              type="number"
              min="1"
              value={fieldItem.quantity}
              onChange={handleCantidadChange}
              className="w-14 h-8"
            />
          </FormControl>
          <FormLabel className="flex items-center">
            {fieldItem.quantity == 1 ? "unidad" : "unidades"}
          </FormLabel>
        </FormItem>
        {"unit_price" in fieldItem && (
          <FormItem className="flex flex-1/2 items-center justify-center">
            <FormLabel>S/</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="0"
                value={fieldItem.unit_price}
                onChange={handlePrecioUnitarioChange}
                className="w-16 h-8"
              />
            </FormControl>
            <FormLabel>c/u</FormLabel>
          </FormItem>
        )}
        </div>
        <div onClick={handleDelete} className="cursor-pointer">
          <Trash2 size={20} />
        </div>
    </div>
  );
};
