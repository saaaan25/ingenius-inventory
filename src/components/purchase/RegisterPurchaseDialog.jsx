import React from "react";
import { PurchaseForm } from "@/components/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import { postPurchaseApiMock,formatObjectFecha } from "@/utils";
import { usePurchase } from "@/hooks";
import { toast } from "sonner";

export const RegisterPurchaseDialog = ({ open, setOpen }) => {
  const { setPurchases } = usePurchase();

  function onSubmit(values) {
    const formattedValues = formatObjectFecha(values);
    console.log(values);
    //post purchase to api

    setPurchases((prevPurchases) => [
      ...prevPurchases,
      postPurchaseApiMock(formattedValues),
    ]);
    toast.success("Compra registrada correctamente");
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
