import React from "react";
import { PurchaseForm } from "@/components/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import { formatObjectFecha } from "@/utils";
import { usePurchases } from "@/hooks";
import { toast } from "sonner";

export const EditPurchaseDialog = ({ open, setOpen }) => {
  const { setPurchases } = usePurchases();

  function onSubmit(values) {
    const formattedValues = formatObjectFecha(values);
    console.log(values);
    //put purchase to api

    toast.success("Edición registrada correctamente");
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
        
      </DialogContent>
    </Dialog>
  );
};