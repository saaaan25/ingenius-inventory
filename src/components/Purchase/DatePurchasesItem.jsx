import { PurchaseCard } from "@/components/Purchase";

export const DatePurchasesItem = ({date, purchases}) => {
  return (
    <div>
      <div>{date}</div>
      {purchases.map(purchase => <PurchaseCard key={purchase.id} id={purchase.id} total_gastado={purchase.total_gastado} />)}
    </div>
  )
}
