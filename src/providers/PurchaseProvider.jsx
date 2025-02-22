import { createContext, useEffect, useState } from "react";
import {
  getPurchaseApiMock,
  getPurchaseDetailByPurchaseIdApiMock,
  getSupplyApiMock,
  putPurchaseApiMock,
  putPurchaseDetailApiMock,
  postPurchaseDetailApiMock,
  deletePurchaseDetailApiMock
} from "@/utils";
import { toast } from "sonner";

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children, idParam }) => {
  const [purchaseId, setPurchaseId] = useState(idParam);
  const [purchase, setPurchase] = useState(null);
  const [purchaseDetail, setPurchaseDetail] = useState(null);

  useEffect(() => {
    if (!purchaseId) return;
    loadPurchase(purchaseId);
  }, [purchaseId]);

  useEffect(() => {
    if (!purchase?.id) return;
    loadPurchaseDetail(purchase.id);
  }, [purchase]);

  const loadPurchase = (purchaseId) => {
    try {
      const foundPurchase = getPurchaseApiMock(purchaseId);
      setPurchase(foundPurchase);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPurchaseDetail = (purchaseId) => {
    try {
      const details = fetchPurchaseDetailByPurchaseId(purchaseId);
      setPurchaseDetail(details);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPurchaseDetailByPurchaseId = (purchaseId) => {
    const details = getPurchaseDetailByPurchaseIdApiMock(purchaseId);
    return details.map((detail) => ({
      ...detail,
      util: getSupplyApiMock(detail.util),
    }));
  };

  const updatePurchase = (purchase) => {
    try {
      const purchaseResponse = putPurchaseApiMock({
        id: purchase.id,
        fecha: purchase.fecha,
      });
      updatePurchaseDetail(purchaseResponse.id, purchase.detalle_compra);
      setPurchase(purchaseResponse);
      toast.success("Compra editada correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al editar la compra");
    }
  };

  const updatePurchaseDetail = (purchaseId, newDetails) => {
    const detailsToDelete = purchaseDetail.filter(
      (currentDetail) => !newDetails.some((newDetail) => newDetail.id === currentDetail.id)
    );
    detailsToDelete.forEach((detail) => {
      deletePurchaseDetailApiMock(detail.id);
    });
    newDetails.forEach((detalle) => {
      if (detalle.id) {
        putPurchaseDetailApiMock({
          id: detalle.id,
          compra: purchaseId,
          precio_unitario: detalle.precio_unitario,
          cantidad: detalle.cantidad,
          util: detalle.util.id,
        });
      } else {
        postPurchaseDetailApiMock({
          compra: purchaseId,
          precio_unitario: detalle.precio_unitario,
          cantidad: detalle.cantidad,
          util: detalle.util.id,
        });
      }
    });
  };

  return (
    <PurchaseContext.Provider
      value={{
        purchaseDetail,
        purchase,
        setPurchase,
        setPurchaseId,
        purchaseId,
        updatePurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};
