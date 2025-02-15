import React from "react";
import { SupplyCard } from ".";
import { usePurchase } from "@/hooks";
import {ScrollArea} from "@/components/ui/scroll-area";

export const SuppliesList = () => {
  const supplies = usePurchase().purchaseDetail.detalle_compra;
  return (
    <div className="w-full">
      <p className="flex self-start font-black mt-10 mb-4">Útiles comprados</p>
      <ScrollArea className="h-80 w-full  rounded-md ">
      <div className="flex flex-col gap-y-2">
        {supplies.map((supply) => (
          <SupplyCard key={supply.id} supply={supply} />
        ))}
      </div>
      </ScrollArea>
    </div>
  );
};
