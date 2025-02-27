import React from "react";
import {
  CardTitle,
  Card,
} from "../ui/card";

export const SupplyCard = ({ purchaseDetailItem }) => {
  return (
    purchaseDetailItem && 
    <Card className="w-full flex flex-col hover:cursor-pointer bg-button text-button py-4 px-6 gap-2">
      <div className="flex justify-between items-center font-normal text-base">
        <CardTitle className="font-normal">{purchaseDetailItem.util.name}</CardTitle>
        <p>S/{purchaseDetailItem.quantity * purchaseDetailItem.unit_price}</p>
      </div>
      <div className=" flex justify-between items-center text-routes text-sm">
        <div>
          {purchaseDetailItem.quantity} {purchaseDetailItem.quantity == 1 ? "unidad" : "unidades"}
        </div>
        <p>Precio unitario: {purchaseDetailItem.unit_price}</p>
      </div>
    </Card>
  );
};
