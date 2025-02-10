import { ShoppingCart } from "lucide-react";
import { CardDescription, CardTitle, Card, CardHeader } from "../ui/card";

export const PurchaseCard = ({ id, total_gastado }) => {
  return (
    <Card>
      <ShoppingCart />
      <CardHeader>
        <CardTitle>Compra {id}</CardTitle>
        <CardDescription>S/ {total_gastado}</CardDescription>
      </CardHeader>
    </Card>
  );
};
