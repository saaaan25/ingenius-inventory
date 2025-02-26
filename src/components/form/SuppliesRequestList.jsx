import { ScrollArea } from "@/components/ui/scroll-area";
import { SupplyRequestFormCard } from "./SupplyRequestFormCard";

export const SuppliesRequestList = ({ field, form }) => {
  return (
    <ScrollArea className="h-20 w-full  rounded-md ">
      <div className="text-sm flex flex-col gap-1.5">
        {field.value && field.value.length > 0 ? (
          field.value.map((fieldItem, index) => (
            <SupplyRequestFormCard
              key={index}
              index={index}
              form={form}
              fieldItem={fieldItem}
            />
          ))
        ) : (
          <div className="text-zinc-400">No hay útiles agregados</div>
        )}
      </div>
    </ScrollArea>
  );
};
