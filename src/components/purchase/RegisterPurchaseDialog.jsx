import React from "react";
import { PurchaseForm } from "@/components/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import {
  postPurchaseApiMock,
  formatFecha,
  postPurchaseDetailApiMock,
} from "@/utils";
import { usePurchases } from "@/hooks";
import { toast } from "sonner";

export const RegisterPurchaseDialog = ({ open, setOpen }) => {
  const { setPurchases } = usePurchases();

  function onSubmit(values) {
    const formattedValues = { ...values, fecha: formatFecha(values.fecha) };
    console.log(formattedValues);

    //post purchase to api
    const purchaseResponse = postPurchaseApiMock({
      fecha: formattedValues.fecha,
    });
    //post detalles_compra to api
    values.detalle_compra.forEach((detalle) => {
      const detalleResponse = postPurchaseDetailApiMock({
        compra: purchaseResponse.id,
        detalle,
      });
    });
    //fetch and set new purchase to state
    setPurchases((prevPurchases) => [...prevPurchases, purchaseResponse]);

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
