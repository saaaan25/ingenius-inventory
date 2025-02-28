import { createContext, useEffect, useState } from "react";
import { formatPurchaseDetail, getTotalSpent } from "@/utils";
import { toast } from "sonner";
import {
  updatePurchase as updatePurchaseApi,
  updatePurchaseDetail as updatePurchaseDetailApi,
  deletePurchaseDetail as deletePurchaseDetailApi,
  createPurchaseDetail as createPurchaseDetailApi,
  getPurchase,
  getPurchaseDetails,
} from "@/api";
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
      const foundPurchase = await getPurchase(purchaseId);
      setPurchase(foundPurchase);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPurchaseDetail = async (purchaseId) => {
    try {
      const details = await getPurchaseDetailByPurchaseId(purchaseId);
      const formattedDetails = formatPurchaseDetail(details);
      setPurchaseDetail(formattedDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const getPurchaseDetailByPurchaseId = async (purchaseId) => {
    const details = await getPurchaseDetails();
    const details_filtered = details.filter(
      (detail) => detail.purchase.id === purchaseId
    );
    return details_filtered;
  };

  const updatePurchase = async (purchase) => {
    try {
      await updatePurchaseDetail(purchase.id, purchase.purchase_detail);
      const purchaseResponse = await updatePurchaseApi({
        id: purchase.id,
        date: purchase.date,
        total_spent: getTotalSpent(purchase.purchase_detail),
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
      detailsToDelete.map((detail) => deletePurchaseDetailApi(detail.id))
    );
    await Promise.all(
      newDetails.map((detalle) => {
        if (detalle.id) {
          return updatePurchaseDetailApi({
            id: detalle.id,
            purchase_id: purchaseId,
            unit_price: detalle.unit_price,
            quantity: detalle.quantity,
            util_id: detalle.util.id,
          });
        } else {
          return createPurchaseDetailApi({
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
