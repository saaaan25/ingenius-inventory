import { usePurchase } from "@/hooks";

export const PurchaseDetailSection = () => {
  const { purchaseDetail } = usePurchase();
  return (
    <div className="w-[50%] flex flex-col gap-4 mt-6">
      <div className="flex justify-between">
        <p>Bimestre de la compra</p>
        <p className="font-bold">{purchaseDetail.bimestre}° Bimestre</p>
      </div>
      <div className="flex justify-between">
        <p>Cantidad de útiles comprados</p>
        <p className="font-bold ">{purchaseDetail.cantidad_total}</p>
      </div>
      <div className="flex justify-between">
        <p>Monto gastado en la compra</p>
        <p className="font-bold ">S/.{purchaseDetail.total_gastado}</p>
      </div>
    </div>
  );
};
