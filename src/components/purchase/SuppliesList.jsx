import React from "react";
import { SupplyCard } from ".";
import { usePurchase } from "@/hooks";
import { ScrollArea } from "@/components/ui/scroll-area";

export const SuppliesList = () => {
  const { purchaseDetail } = usePurchase();
  return (
    purchaseDetail && (
      <div className="w-full">
        <p className="flex self-start font-black mt-10 mb-4">
          Útiles comprados
        </p>
        <ScrollArea className="h-80 w-full  rounded-md ">
          <div className="flex flex-col gap-y-2">
            {purchaseDetail.map((purchaseDetailItem) => (
              <SupplyCard
                key={purchaseDetailItem.id}
                purchaseDetailItem={purchaseDetailItem}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    )
  );
};
