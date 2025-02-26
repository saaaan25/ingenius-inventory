import { usePurchase } from "@/hooks";
import { getBimestre, getCantidadTotal } from "@/utils";

export const PurchaseDetailSection = () => {
  const { purchase,purchaseDetail } = usePurchase();
  return (
    purchase && (
      <div className="w-[50%] flex flex-col gap-4 mt-6">
        <div className="flex justify-between">
          <p>Bimestre de la compra</p>
          <p className="font-bold">{getBimestre(purchase)}° Bimestre</p>
        </div>
        <div className="flex justify-between">
          <p>Cantidad de útiles comprados</p>
          <p className="font-bold ">{getCantidadTotal(purchaseDetail)}</p>
        </div>
        <div className="flex justify-between">
          <p>Monto gastado en la compra</p>
          <p className="font-bold ">S/.{purchase.total_spent}</p>
        </div>
      </div>
    )
  );
};
