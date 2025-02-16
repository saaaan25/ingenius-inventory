import {
  PurchaseDetailSection,
  PurchaseHeaderSection,
  SuppliesList,
} from "@/components/purchase";
import { EditPurchaseButton } from "@/components/button";
import { useParams } from "react-router-dom";
import { usePurchase } from "@/hooks";
import { useEffect } from "react";
import { Breadcrumb } from "@/components/breadcrumb";

export const Purchase = () => {
  const { id } = useParams();
  const { setPurchaseId, purchaseId } = usePurchase();
  const breadcrumbItems = [
    { url: "/purchases", label: "Compras" },
    { url: `/purchases/${id}`, label: `Compra N° ${id}` },
  ];

  useEffect(() => {
    if (id && id !== purchaseId) { 
      console.log("setting purchase id", id);
      setPurchaseId(parseInt(id)); 
    }
  }, [id]);


  return (
    purchaseId&&
    <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
      <Breadcrumb values={breadcrumbItems} />
      <div className="pl-5 w-full flex flex-col items-start">
        <PurchaseHeaderSection />
        <PurchaseDetailSection />
        <SuppliesList />
        <EditPurchaseButton />
      </div>
    </div>
  );
};
