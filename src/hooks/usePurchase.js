import { useContext, useEffect, useState } from "react";
import { PurchaseContext } from "@/providers";
import { formatPurchaseDetail } from "@/utils";

export const usePurchase = () => {
  const { purchaseDetail, setPurchase } = useContext(PurchaseContext);
  return { purchaseDetail:formatPurchaseDetail(purchaseDetail), setPurchase };
};
