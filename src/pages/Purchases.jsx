import { AddButton } from "@/components/button";
import { DatePurchasesSection, PurchaseForm } from "@/components/purchase";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { usePurchase } from "@/hooks/usePurchase";
const Purchases = () => {
  const { purchasesGroupedByDate } = usePurchase();
  console.log(purchasesGroupedByDate);
  return (
    <Dialog>
      <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
        <a className="font-light text-routes text-sm" href="/purchases">
          Compras
        </a>
        <div className="pl-5 w-full">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">Compras</h1>
            <DialogTrigger asChild>
              <AddButton>Registrar compra</AddButton>
            </DialogTrigger>
          </div>
          <DatePurchasesSection />
        </div>
      </div>
      <PurchaseForm />
    </Dialog>
  );
};

export default Purchases;
