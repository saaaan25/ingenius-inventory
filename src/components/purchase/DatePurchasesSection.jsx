import { usePurchases } from "@/hooks";
import { DatePurchasesItem } from "@/components/purchase";

export const DatePurchasesSection = () => {
  const {purchasesGroupedByDate}=usePurchases();
  return (
    purchasesGroupedByDate.map(({fecha, purchases}) => (
    <DatePurchasesItem key={fecha} date={fecha} purchases={purchases} />  
  )))
}
