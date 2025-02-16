import React from "react";
import { PurchaseForm } from "@/components/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import { formatFecha } from "@/utils";
import { usePurchase, usePurchases } from "@/hooks";
import { toast } from "sonner";
import { postPurchaseApiMock,postPurchaseDetailApiMock } from "@/utils";

export const EditPurchaseDialog = ({ open, setOpen }) => {
  const { setPurchases } = usePurchases();
  const {purchase,purchaseDetail,setPurchase,setPurchaseDetail}=usePurchase();

  function onSubmit(values) {
    const formattedValues = {...values, fecha: formatFecha(values.fecha)};
    console.log(formattedValues);
    
    //put purchase to api
    const purchaseResponse = postPurchaseApiMock({
      id: purchaseDetail.id,
      fecha: formattedValues.fecha,
    });

    //put puechase details to api
    const detalleResponses = values.detalle_compra.map((detalle) => {
      return postPurchaseDetailApiMock({
        compra: purchaseResponse.id,
        ...detalle,
      });
    });


    //set new purchase to state
    setPurchases((prevPurchases) => [
      ...prevPurchases.filter((p) => p.id !== purchaseResponse.id),
      purchaseResponse,
    ]);
    //set actual purchase that will trigger their detail fetch
    setPurchase(purchaseResponse);

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
        <PurchaseForm onSubmit={onSubmit} handleCloseDialog={handleCloseDialog} defaultPurchase={{...purchase,detalle_compra:purchaseDetail}} />
      </DialogContent>
    </Dialog>
  );
};