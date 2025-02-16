import { usePurchases } from "@/hooks";
import { DatePurchasesItem } from "@/components/purchases";

export const DatePurchasesSection = () => {
  const {purchasesGroupedByDate}=usePurchases();
  return (
    purchasesGroupedByDate.map(({fecha, purchases}) => (
    <DatePurchasesItem key={fecha} date={fecha} purchases={purchases} />  
  )))
}
