import { RegisterPurchaseButton } from "@/components/button";
import { DatePurchasesSection } from "@/components/purchases";

const Purchases = () => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
      <a className="font-light text-routes text-sm" href="/purchases">
        Compras
      </a>
      <div className="pl-5 w-full">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">Compras</h1>
          <RegisterPurchaseButton />
        </div>
        <DatePurchasesSection />
      </div>
    </div>
  );
};

export default Purchases;
