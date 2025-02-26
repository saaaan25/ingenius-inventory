import { usePurchases } from "@/hooks";
import { DatePurchasesItem } from "@/components/purchases";
import { groupPurchasesByDate } from "@/utils";

export const DatePurchasesList = () => {
  const { purchases } = usePurchases();
  return (
    purchases && (
      <>
        {groupPurchasesByDate(purchases).map(({ date, purchases }) => (
          <DatePurchasesItem key={date} date={date} purchases={purchases} />
        ))}
      </>
    )
  );
};
