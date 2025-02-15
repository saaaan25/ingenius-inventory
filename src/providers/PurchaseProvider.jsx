import { createContext, useEffect, useState } from "react";
import { purchaseDetailData,suppliesData} from "@/utils";
import { usePurchases } from "@/hooks";
export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children}) => {
  const [purchase, setPurchase] = useState(null);
  const [purchaseDetail, setPurchaseDetail] = useState(null);
  const [purchaseId,setPurchaseId] = useState(null);

  const {purchases}=usePurchases();

  useEffect(() => {
    if (!purchaseId) return;

    console.log("setting purchase");
    //fetch purchase by id
    const fetchPurchase = async () => {
      purchases.forEach((purchase) => {
        if (purchase.id === parseInt(purchaseId)) {
          console.log(purchase);
          setPurchase(purchase);
          return;
        }
      });
    };
    fetchPurchase();
  }, [purchaseId]);

  useEffect(() => {
    if (!purchase?.id) return;

    console.log("setting purchase detail");
    const fetchPurchaseDetail = async () => {
      //fetch detalle_compra by compra
      const filteredPurchaseDetail = purchaseDetailData.filter((detail) => detail.compra === purchase?.id);
      const purchaseDetail = filteredPurchaseDetail.map((detail) => {
        //fetch util by id
        const util = suppliesData.find((supply) => supply.id === detail.util);
        return { ...detail, util };
      });
      console.log(purchaseDetail);
      setPurchaseDetail(purchaseDetail);
    };

    fetchPurchaseDetail();
  }, [purchase?.id]); 

  return (
    <PurchaseContext.Provider value={{ purchaseDetail, purchase, setPurchase, setPurchaseId, purchaseId }}>
      {children}
    </PurchaseContext.Provider>
  );
};