import { getPurchasesApiMock, purchasesData } from "@/utils";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  postPurchaseApiMock,
  postPurchaseDetailApiMock,
} from "@/utils";

export const PurchasesContext = createContext();

export const PurchasesProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    loadPurchases();
  }, []);

  const loadPurchases = async () => {
    try {
      const purchases = await getPurchasesApiMock();
      setPurchases(purchases);
    } catch (error) {
      console.log(error);
    }
  };

  const createPurchase = async (purchase) => {
    try {
      const purchaseResponse =await postPurchaseApiMock({
        date: purchase.date,
        user_id: purchase.user_id,
      });
      await createPurchaseDetail(purchaseResponse.id, purchase.purchase_detail);
      setPurchases((prevPurchases) => [...prevPurchases, purchaseResponse]);
      toast.success("Compra registrada correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al registrar la compra");
    }
  };

  const createPurchaseDetail =async (purchaseId, purchaseDetail) => {
    purchaseDetail.map((detalle) =>
      postPurchaseDetailApiMock({
        purchase_id: purchaseId,
        unit_price: detalle.unit_price,
        quantity: detalle.quantity,
        util_id: detalle.util.id,
      })
    );
  };

  

  return (
    <PurchasesContext.Provider
      value={{ purchases, createPurchase }}
    >
      {children}
    </PurchasesContext.Provider>
  );
};
