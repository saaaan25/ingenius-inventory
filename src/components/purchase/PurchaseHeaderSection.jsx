import React from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { usePurchase } from "@/hooks";

export const PurchaseHeaderSection = () => {
  const { purchase } = usePurchase();
  return (
    purchase && (
      <>
        <div className="mt-2 mb-4">
          <button className="flex text-routes_selected items-center">
            <HiChevronLeft />
            <Link className="text-sm" to="/purchases">
              Volver
            </Link>
          </button>
        </div>
        <h1 className="font-semibold text-xl">Compra N° {purchase.id}</h1>
        <div>
          <h2 className="text-routes">Fecha: {purchase.fecha}</h2>
        </div>
      </>
    )
  );
};
