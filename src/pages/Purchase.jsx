import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { PurchaseDetailSection, SuppliesList } from "@/components/purchase";
import { usePurchase } from "@/hooks";
import { EditPurchaseButton } from "@/components/button";

export const Purchase = () => {
  const { purchaseDetail } = usePurchase();

  return (
    purchaseDetail && (
      <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
        <div className="flex items-center text-routes">
          <Link className="font-light text-routes_selected text-sm" to="/purchases">
            Compras
          </Link>
          <HiChevronRight />
          <Link className="font-light text-routes_selected text-sm" to={"/purchases/" + purchaseDetail.id}>
            Compra N° {purchaseDetail.id}
          </Link>
        </div>
        <div className="pl-5 w-full flex flex-col items-start">
          <div className="mt-2 mb-4">
            <button className="flex text-routes_selected items-center">
              <HiChevronLeft />
              <Link className="text-sm" to="/purchases">
                Volver
              </Link>
            </button>
          </div>
          <h1 className="font-semibold text-xl">Compra N° {purchaseDetail.id}</h1>
          <div>
            <h2 className="text-routes">Fecha: {purchaseDetail.fecha}</h2>
          </div>
          <PurchaseDetailSection />
          <SuppliesList />
          <EditPurchaseButton />
        </div>
      </div>
    )
  );
};
