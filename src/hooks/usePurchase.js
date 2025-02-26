import { useContext } from "react";
import { PurchaseContext } from "@/providers";

export const usePurchase = () => {
  const {
    purchaseDetail,
    setPurchaseDetail,
    setPurchase,
    purchase,
    setPurchaseId,
    purchaseId,
    updatePurchase,
  } = useContext(PurchaseContext);

  return {
    purchaseDetail,
    setPurchaseDetail,
    setPurchase,
    purchase,
    setPurchaseId,
    purchaseId,
    updatePurchase,
  };
};
