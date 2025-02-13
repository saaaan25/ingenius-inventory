import { format } from "date-fns";

export const orderPurchasesByDate = (purchases) => {
  return purchases.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
};

export const groupPurchasesByDate = (purchases) => {
  const orderedPurchases = orderPurchasesByDate(purchases);

  return orderedPurchases.reduce((acc, purchase) => {
    const { fecha } = purchase;
    const existingGroup = acc.find((group) => group.fecha === fecha);
    if (existingGroup) {
      existingGroup.purchases.push(purchase);
    } else {
      acc.push({ fecha, purchases: [purchase] });
    }
    return acc;
  }, []);
};

export const postPurchaseApiMock = (values) => {
  const id = Math.floor(Math.random() * 1000000);
  const total_gastado = values.detalle_compra.reduce(
    (total, item) => total + item.cantidad * item.precio_unitario,
    0
  );
  const finalValues = {
    ...values,
    id,
    total_gastado,
  };
  return finalValues;
};

export const formatObjectFecha = (values) => {
  return {
    ...values,
    fecha: format(new Date(values.fecha), "yyyy-MM-dd"),
  };
};

