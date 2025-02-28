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
import { getUtils } from "@/api";
export const AddSupplyToRequest = ({ field, form }) => {
  const [supplies, setSupplies] = useState([]);
  useEffect(() => {
    async function fetchSupplies() {
      try {
        const suppliesResponse = await getUtils();
        setSupplies(suppliesResponse);
      } catch (e) {
        console.log(e);
      }
    }
    fetchSupplies();
  }, []);
  return (
    <PopoverContent className="w-[300px] p-0 " side="bottom" align="end">
      <Command>
        <CommandInput placeholder="Busca un útil..." />

        <CommandList>
          <ScrollArea
            className={"[&>[data-radix-scroll-area-viewport]]:max-h-[200px]"}
          >
            <CommandGroup>
              {supplies.map((supply) => (
                <CommandItem
                  key={supply.id}
                  onSelect={() => {
                    const alreadySelected = field.value.some(
                      (elem) => elem.util.id === supply.id
                    );
                    const updatedDetalleSolicitud = alreadySelected
                      ? field.value.filter((elem) => elem.util.id !== supply.id)
                      : [
                          ...field.value,
                          {
                            util: supply,
                            quantity: 1
                          },
                        ];
                    form.setValue("request_details", updatedDetalleSolicitud);
                  }}
                >
                  {supply.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      field.value.some((elem) => elem.util.id === supply.id)
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
