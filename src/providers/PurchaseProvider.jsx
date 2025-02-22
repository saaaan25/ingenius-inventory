import { createContext, useEffect, useState } from "react";
import {
  getPurchaseDetailByPurchaseIdApiMock,
  getSupplyApiMock,
} from "@/utils";
import { usePurchases } from "@/hooks";
export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children, idParam }) => {
  const [purchaseId, setPurchaseId] = useState(idParam);
  const [purchase, setPurchase] = useState(null);
  const [purchaseDetail, setPurchaseDetail] = useState(null);
  const { purchases } = usePurchases();

  useEffect(() => {
    if (!purchaseId) return;
    loadPurchase(purchaseId);
  }, [purchaseId, purchases]);

  useEffect(() => {
    if (!purchase?.id) return;
    loadPurchaseDetail(purchase.id);
  }, [purchase]);

  const loadPurchase = (purchaseId) => {
    const foundPurchase =
      purchases.find((p) => p.id === parseInt(purchaseId)) || null;
    if (foundPurchase) {
      console.log("Setting purchase:", foundPurchase);
      setPurchase(foundPurchase);
    }
  };

  const loadPurchaseDetail = (purchaseId) => {
    try {
      const details = fetchPurchaseDetailByPurchaseId(purchaseId);
      console.log("Setting purchase detail:", details);
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

  return (
    <PurchaseContext.Provider
      value={{
        purchaseDetail,
        purchase,
        setPurchase,
        setPurchaseId,
        purchaseId,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};
