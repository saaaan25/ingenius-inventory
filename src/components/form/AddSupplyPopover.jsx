import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { PopoverContent } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { suppliesData } from "@/utils";
import { useEffect, useState } from "react";
export const AddSupplyPopover = ({ field, form }) => {
  const [supplies, setSupplies] = useState([]);
  useEffect(() => {
    function fetchSupplies() {
      // fetch all supplies 
      setSupplies(suppliesData);
    }
    fetchSupplies();
  }, []);
  return (
    <PopoverContent className="w-[300px] p-0 " side="bottom" align="end">
      <Command>
        <CommandInput placeholder="Busca un útil..." />

        <CommandList>
          <ScrollArea className={'[&>[data-radix-scroll-area-viewport]]:max-h-[200px]'}>
            <CommandGroup>
              {supplies.map((supply) => (
                <CommandItem
                  key={supply.id}
                  onSelect={() => {
                    const alreadySelected = field.value.some(
                      (elem) => elem.util === supply.id
                    );
                    const updatedDetalleCompra = alreadySelected
                      ? field.value.filter((elem) => elem.util !== supply.id)
                      : [
                          ...field.value,
                          {
                            util: supply.id,
                            nombre: supply.nombre,
                            cantidad: 1,
                            precio_unitario: 0,
                          },
                        ];
                    form.setValue("detalle_compra", updatedDetalleCompra);
                  }}
                >
                  {supply.nombre}
                  <Check
                    className={cn(
                      "ml-auto",
                      field.value.some((elem) => elem.util === supply.id)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </CommandList>
      </Command>
    </PopoverContent>
  );
};
