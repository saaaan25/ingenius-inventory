import React from "react";
import {
  CardContent,
  CardDescription,
  CardTitle,
  Card,
  CardHeader,
} from "../ui/card";

export const SupplyCard = ({ purchaseDetailItem }) => {
  return (
    purchaseDetailItem && 
    <Card className="w-full flex flex-col hover:cursor-pointer bg-button text-button py-4 px-6 gap-2">
      <div className="flex justify-between items-center font-normal text-base">
        <CardTitle className="font-normal">{purchaseDetailItem.util.nombre}</CardTitle>
        <p>S/{purchaseDetailItem.cantidad * purchaseDetailItem.precio_unitario}</p>
      </div>
      <div className=" flex justify-between items-center text-routes text-sm">
        <div>
          {purchaseDetailItem.cantidad} {purchaseDetailItem.cantidad == 1 ? "unidad" : "unidades"}
        </div>
        <p>Precio unitario: {purchaseDetailItem.precio_unitario}</p>
      </div>
    </Card>
  );
};
