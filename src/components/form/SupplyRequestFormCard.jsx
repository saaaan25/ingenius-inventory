import supplies from "@/data-test/supplies";
import { FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { Trash2 } from "lucide-react";
import util_nuevo from "@/data-test/util_nuevo";

export const SupplyRequestFormCard = ({ index, fieldItem, form }) => {
  const handleCantidadChange = (e) => {
    const newCantidad = parseInt(e.target.value, 10) || 1;
    const updatedDetalleSolicitud = form
      .getValues("request_details")
      .map((item, i) =>
        i === index ? { ...item, cantidad: newCantidad } : item
      );
    form.setValue("request_details", updatedDetalleSolicitud);
  };

  const handleDelete = () => {
    const updatedDetalleSolicitud = form
      .getValues("request_details")
      .filter((_, i) => i !== index);
    form.setValue("request_details", updatedDetalleSolicitud);
  };

  const util = util_nuevo.find(supply => supply.id === fieldItem.util)

  return (
    <div className="flex justify-between items-center border rounded-md border-zinc-200 px-4 py-2 bg-button text-button">
      <div className="w-40">{fieldItem.util.name ? fieldItem.util.name : util.name}</div>
      <div className="flex-auto flex text-zinc-400 items-center">
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
            {fieldItem.quantity === 1 ? "unidad" : "unidades"}
          </FormLabel>
        </FormItem>
      </div>
      <div onClick={handleDelete} className="cursor-pointer">
        <Trash2 size={20} />
      </div>
    </div>
  );
};
