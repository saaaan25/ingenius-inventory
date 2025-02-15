import { usePurchase } from "@/hooks";

export const PurchaseDetailSection = () => {
  const { purchase } = usePurchase();
  return (
    purchase && (
      <div className="w-[50%] flex flex-col gap-4 mt-6">
        <div className="flex justify-between">
          <p>Bimestre de la compra</p>
          <p className="font-bold">{purchase.bimestre}° Bimestre</p>
        </div>
        <div className="flex justify-between">
          <p>Cantidad de útiles comprados</p>
          <p className="font-bold ">{purchase.cantidad_total}</p>
        </div>
        <div className="flex justify-between">
          <p>Monto gastado en la compra</p>
          <p className="font-bold ">S/.{purchase.total_gastado}</p>
        </div>
      </div>
    )
  );
};
