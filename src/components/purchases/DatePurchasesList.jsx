import { usePurchases } from "@/hooks";
import { DatePurchasesItem } from "@/components/purchases";
import { groupPurchasesByDate } from "@/utils";

export const DatePurchasesList = () => {
  const {purchases}=usePurchases();
  return (
    groupPurchasesByDate(purchases).map(({fecha, purchases}) => (
    <DatePurchasesItem key={fecha} date={fecha} purchases={purchases} />  
  )))
}
