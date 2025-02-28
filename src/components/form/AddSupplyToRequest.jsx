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
import util_nuevo from "@/data-test/util_nuevo";
  
  export const AddSupplyToRequest = ({ field, form }) => {
    const [suppliesList, setSuppliesList] = useState([]);
  
    useEffect(() => {
      try {
        const suppliesResponse = util_nuevo
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
                    (elem) => elem.util.id === supply.util_id
                  );
  
                  return (
                    <CommandItem
                      key={supply.util_id}
                      onSelect={() => {
                        const updatedDetalleSolicitud = alreadySelected
                          ? currentValue.filter(
                              (elem) => elem.util.id !== supply.util_id
                            )
                          : [
                              ...currentValue,
                              {
                                util: { util_id: supply.util_id, name: supply.name },
                                cantidad: 1, 
                              },
                            ];
                        form.setValue("request_details", updatedDetalleSolicitud);
                      }}
                    >
                      {supply.name}
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
  