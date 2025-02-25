import { useContext} from "react";
import { PurchaseContext } from "@/providers";
import { formatPurchase } from "@/utils";

export const usePurchase = () => {
  const { purchaseDetail, setPurchaseDetail, setPurchase, purchase, setPurchaseId, purchaseId, updatePurchase } =
    useContext(PurchaseContext);
  if (!purchase) {
    return { purchaseDetail, setPurchaseDetail, setPurchase, purchase, setPurchaseId, purchaseId, updatePurchase };
  }

  return {
    purchaseDetail,
    setPurchaseDetail,
    setPurchase,
    purchase: formatPurchase(purchase, purchaseDetail),
    setPurchaseId,
    purchaseId,
    updatePurchase,
  };
};
