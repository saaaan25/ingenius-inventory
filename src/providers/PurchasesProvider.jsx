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
      const purchases = getPurchasesApiMock();
      setPurchases(purchases);
    } catch (error) {
      console.log(error);
    }
  };

  const createPurchase = (purchase) => {
    try {
      const purchaseResponse = postPurchaseApiMock({
        fecha: purchase.fecha,
      });
      createPurchaseDetail(purchaseResponse.id, purchase.detalle_compra);
      setPurchases((prevPurchases) => [...prevPurchases, purchaseResponse]);
      toast.success("Compra registrada correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al registrar la compra");
    }
  };

  const createPurchaseDetail = (purchaseId, purchaseDetail) => {
    purchaseDetail.map((detalle) =>
      postPurchaseDetailApiMock({
        compra: purchaseId,
        precio_unitario: detalle.precio_unitario,
        cantidad: detalle.cantidad,
        util: detalle.util.id,
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
