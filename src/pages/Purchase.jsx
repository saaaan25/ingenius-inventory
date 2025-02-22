import {
  PurchaseDetailSection,
  PurchaseHeaderSection,
  SuppliesList,
} from "@/components/purchase";
import { EditPurchaseButton } from "@/components/button";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PurchaseProvider } from "@/providers";

export const Purchase = () => {
  const { id } = useParams();
  const PurchaseBreadcrumb = [
    { label: "Compras", url: "/purchases" },
    { label: `Compra N° ${id}`, url: "/purchases/" + id },
  ];

  return (
    id && (
      <PurchaseProvider idParam={id}>
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
          <Breadcrumb values={PurchaseBreadcrumb} />
          <div className="pl-5 w-full flex flex-col items-start">
            <PurchaseHeaderSection />
            <PurchaseDetailSection />
            <SuppliesList />
            <EditPurchaseButton />
          </div>
        </div>
      </PurchaseProvider>
    )
  );
};
