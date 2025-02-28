import React from "react";
import { PurchaseForm } from "@/components/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import { usePurchase } from "@/hooks";

export const EditPurchaseDialog = ({ open, setOpen }) => {
  const {updatePurchase} = usePurchase();
  const {purchase,purchaseDetail}=usePurchase();

  function onSubmit(values) {
    const formattedValues = {...values, date: values.date};
    console.log(formattedValues);
    updatePurchase(formattedValues);
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
              Editar compra
            </DialogDescription>
          </DialogTitle>
        </DialogHeader>
        <PurchaseForm onSubmit={onSubmit} handleCloseDialog={handleCloseDialog} defaultPurchase={{...purchase,purchase_detail:purchaseDetail}} />
      </DialogContent>
    </Dialog>
  );
};