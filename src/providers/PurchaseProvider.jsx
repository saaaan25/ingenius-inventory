import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { purchaseDetailData } from "@/utils";
export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const { id } = useParams(); 
  const [purchase, setPurchase] = useState(null);
  const [purchaseDetail, setPurchaseDetail] = useState(purchaseDetailData);

  useEffect(() => {
    const fetchPurchase = async () => {
      //fetch and set purchase with param id 
    };
    fetchPurchase();
  }, [id]);

  useEffect(() => {
    const fetchPurchaseDetail = async () => {
      //fetch and set purchase with detalle_compra in purchaseDetail
    };

    fetchPurchaseDetail();
  }, [purchase?.id]); 

  return (
    <PurchaseContext.Provider value={{ purchaseDetail, setPurchase }}>
      {children}
    </PurchaseContext.Provider>
  );
};