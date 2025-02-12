import { AddButton } from "@/components/button";
import { DatePurchasesSection } from "@/components/purchase";
import { RegisterPurchaseDialog} from "@/components/purchase/RegisterPurchaseDialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
const Purchases = () => {
  return (
    <Dialog className="w-3-">
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
      <RegisterPurchaseDialog />
    </Dialog>
  );
};

export default Purchases;
