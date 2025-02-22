import { RegisterPurchaseButton } from "@/components/button";
import { DatePurchasesList } from "@/components/purchases";
import { PurchasesProvider } from "@/providers";

const Purchases = () => {
  return (
    <PurchasesProvider>
      <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
        <a className="font-light text-routes text-sm" href="/purchases">
          Compras
        </a>
        <div className="pl-5 w-full">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">Compras</h1>
            <RegisterPurchaseButton />
          </div>
          <DatePurchasesList />
        </div>
      </div>
    </PurchasesProvider>
  );
};

export default Purchases;
