import { createContext, useEffect, useState } from "react";
import {
  getPurchaseApiMock,
  getSupplyApiMock,
  putPurchaseApiMock,
  putPurchaseDetailApiMock,
  postPurchaseDetailApiMock,
  deletePurchaseDetailApiMock,
  getPurchasesDetailApiMock,
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

  const loadPurchase = async (purchaseId) => {
    try {
      const foundPurchase = await getPurchaseApiMock(purchaseId);
      setPurchase(foundPurchase);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPurchaseDetail = async (purchaseId) => {
    try {
      const details = await getPurchaseDetailByPurchaseId(purchaseId);
      setPurchaseDetail(details);
    } catch (error) {
      console.log(error);
    }
  };

  const getPurchaseDetailByPurchaseId = async (purchaseId) => {
    const details = await getPurchasesDetailApiMock();
    const details_filtered = details.filter(
      (detail) => detail.purchase_id === purchaseId
    );
    const details_with_util = await Promise.all(
      details_filtered.map(async (detail) => ({
        ...detail,
        util: await getSupplyApiMock(detail.util_id),
      }))
    );
    return details_with_util;
  };

  const updatePurchase = async (purchase) => {
    try {
      await updatePurchaseDetail(purchase.id, purchase.purchase_detail);
      const purchaseResponse = await putPurchaseApiMock({
        id: purchase.id,
        date: purchase.date,
      });
      setPurchase(purchaseResponse);
      toast.success("Compra editada correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al editar la compra");
    }
  };

  const updatePurchaseDetail = async (purchaseId, newDetails) => {
    const detailsToDelete = purchaseDetail.filter(
      (currentDetail) =>
        !newDetails.some((newDetail) => newDetail.id === currentDetail.id)
    );
    await Promise.all(
      detailsToDelete.map((detail) => deletePurchaseDetailApiMock(detail.id))
    );
    await Promise.all(
      newDetails.map((detalle) => {
        if (detalle.id) {
          return putPurchaseDetailApiMock({
            id: detalle.id,
            purchase_id: purchaseId,
            unit_price: detalle.unit_price,
            quantity: detalle.quantity,
            util_id: detalle.util.id,
          });
        } else {
          return postPurchaseDetailApiMock({
            purchase_id: purchaseId,
            unit_price: detalle.unit_price,
            quantity: detalle.quantity,
            util_id: detalle.util.id,
          });
        }
      })
    );
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
