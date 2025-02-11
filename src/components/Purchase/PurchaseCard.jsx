import { ShoppingCart } from "lucide-react";
import { CardDescription, CardTitle, Card, CardHeader } from "../ui/card";

export const PurchaseCard = ({ id, total_gastado }) => {
  return (
    <Card className="w-full flex hover:cursor-pointer hover:bg-gray-50">
      <div className="flex items-center px-6">
        <ShoppingCart size={35}/>
      </div>
      <CardHeader className="flex text-start pl-0">
        <CardTitle>Compra {id}</CardTitle>
        <CardDescription>S/ {total_gastado}</CardDescription>
      </CardHeader>
    </Card>
  );
};
