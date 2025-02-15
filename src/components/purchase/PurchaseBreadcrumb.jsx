import { Breadcrumb } from "@/components/breadcrumb";
import { usePurchase } from "@/hooks";

export const PurchaseBreadcrumb = () => {
  const {purchaseId} = usePurchase();
  const breadcrumbItems = [
    { url: "/purchases", label: "Compras" },
    { url: `/purchases/${purchaseId}`, label: `Compra N° ${purchaseId}` },
  ];

  return <Breadcrumb values={breadcrumbItems} />;
};
