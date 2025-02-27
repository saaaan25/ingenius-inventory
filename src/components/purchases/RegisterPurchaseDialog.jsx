import React from "react";
import { PurchaseForm } from "@/components/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import { usePurchases } from "@/hooks";
import { formatFecha } from "@/utils";

export const RegisterPurchaseDialog = ({ open, setOpen }) => {
  const { createPurchase} = usePurchases();

  function onSubmit(values) {
    const formattedValues = { ...values, date: formatFecha(values.date) };
    console.log(formattedValues);
    createPurchase(formattedValues);
    handleCloseDialog();
  }
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[725px] px-10 py-8 h-[85vh] flex flex-col gap-7">
        <DialogHeader>
          <DialogTitle>
            <DialogDescription className="text-primary text-lg">
              Registrar compra
            </DialogDescription>
          </DialogTitle>
        </DialogHeader>
        <PurchaseForm
          onSubmit={onSubmit}
          handleCloseDialog={handleCloseDialog}
        />
      </DialogContent>
    </Dialog>
  );
};
