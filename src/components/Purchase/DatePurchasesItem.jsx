import { PurchaseCard } from "@/components/purchase";

export const DatePurchasesItem = ({ date, purchases }) => {
  return (
    <div className="mt-5">
      <div className="text-start font-extrabold ">{date}</div>
      <div className="flex flex-col gap-y-2 mt-2">
        {purchases.map((purchase) => (
          <PurchaseCard
            key={purchase.id}
            id={purchase.id}
            total_gastado={purchase.total_gastado}
          />
        ))}
      </div>
    </div>
  );
};
