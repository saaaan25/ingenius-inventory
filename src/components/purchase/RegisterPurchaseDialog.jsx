import React from "react";
import { PurchaseForm } from "@/components/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const RegisterPurchaseDialog = ({ defaultSupplies }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {defaultSupplies ? "Actualizar" : "Registrar"} compra
        </DialogTitle>
        <DialogDescription>
          Por favor, {defaultSupplies ? "modifique" : "complete"} el siguiente formulario
          para {defaultSupplies ? "actualizar" : "registrar"} su compra.
        </DialogDescription>
      </DialogHeader>
      <PurchaseForm defaultSupplies={defaultSupplies} />
    </DialogContent>
  );
};
