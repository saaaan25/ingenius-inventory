import React, { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getPurchases,
  createPurchase as createPurchaseApi,
  createPurchaseDetail as createPurchaseDetailApi,
} from "@/api";
import { getTotalSpent } from "@/utils";
import { useAuth } from "@/hooks";

export const PurchasesContext = createContext();

export const PurchasesProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    loadPurchases();
  }, []);

  const loadPurchases = async () => {
    try {
      const purchases = await getPurchases();
      setPurchases(purchases);
    } catch (error) {
      console.log(error);
    }
  };

  const createPurchase = async (purchase) => {
    console.log(purchase);
    try {
      const purchaseResponse = await createPurchaseApi({
        date: purchase.date,
        user_id: user.id,
        total_spent: getTotalSpent(purchase.purchase_detail),
      });
      await createPurchaseDetail(purchaseResponse.id, purchase.purchase_detail);
      setPurchases((prevPurchases) => [...prevPurchases, purchaseResponse]);
      toast.success("Compra registrada correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al registrar la compra");
    }
  };

  const createPurchaseDetail = async (purchaseId, purchaseDetail) => {
    await Promise.all(
      purchaseDetail.map((detalle) =>
        createPurchaseDetailApi({
          purchase_id: purchaseId,
          unit_price: detalle.unit_price,
          quantity: detalle.quantity,
          util_id: detalle.util.id,
        })
      )
    );
  };

  return (
    <PurchasesContext.Provider value={{ purchases, createPurchase }}>
      {children}
    </PurchasesContext.Provider>
  );
};
