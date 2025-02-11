import { usePurchase } from "@/hooks";
import { DatePurchasesItem } from "@/components/purchase";

export const DatePurchasesSection = () => {
  const {purchasesGroupedByDate}=usePurchase();
  return (
    purchasesGroupedByDate.map(({fecha, purchases}) => (
    <DatePurchasesItem key={fecha} date={fecha} purchases={purchases} />  
  )))
}
