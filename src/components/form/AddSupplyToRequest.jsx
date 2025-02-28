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
  import { useEffect, useState } from "react";
import supplies from "@/data-test/supplies";
  
  export const AddSupplyToRequest = ({ field, form }) => {
    const [suppliesList, setSuppliesList] = useState([]);
  
    useEffect(() => {
      try {
        const suppliesResponse = supplies
        setSuppliesList(suppliesResponse);
      } catch (e) {
        console.error("Error fetching supplies:", e);
      }
    }, []);
  
    return (
      <PopoverContent className="w-[300px] p-0" side="bottom" align="end">
        <Command>
          <CommandInput placeholder="Busca un útil..." />
  
          <CommandList>
            <ScrollArea
              className={"[&>[data-radix-scroll-area-viewport]]:max-h-[200px]"}
            >
              <CommandGroup>
                {suppliesList.map((supply) => {
                  const currentValue = field.value || []; 
                  const alreadySelected = currentValue.some(
                    (elem) => elem.util.id === supply.id
                  );
  
                  return (
                    <CommandItem
                      key={supply.id}
                      onSelect={() => {
                        const updatedDetalleSolicitud = alreadySelected
                          ? currentValue.filter(
                              (elem) => elem.util.id !== supply.id
                            )
                          : [
                              ...currentValue,
                              {
                                util: { id: supply.id, nombre: supply.nombre },
                                cantidad: 1, 
                              },
                            ];
                        form.setValue("detalle_solicitud", updatedDetalleSolicitud);
                      }}
                    >
                      {supply.nombre}
                      <Check
                        className={cn(
                          "ml-auto",
                          alreadySelected ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    );
  };
  