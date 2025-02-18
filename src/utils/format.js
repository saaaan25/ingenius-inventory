import { getCantidadTotal, getBimestre } from '@/utils/helpers';
import { format } from 'date-fns';

export const orderPurchasesByDate = (purchases) => {
  return purchases.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
};

export const groupPurchasesByDate = (purchases) => {
  const orderedPurchases = orderPurchasesByDate(purchases);

  return orderedPurchases.reduce((acc, purchase) => {
    const { fecha } = purchase;
    const existingGroup = acc.find(group => group.fecha === fecha);
    if (existingGroup) {
      existingGroup.purchases.push(purchase);
    } else {
      acc.push({ fecha, purchases: [purchase] });
    }
    return acc;
  }, []);
};

export const groupUsersByRole = (users) => {
  return users.reduce((acc, user) => {
    const { rol } = user;
    const existingGroup = acc.find(group => group.rol === rol);
    if (existingGroup) {
      existingGroup.users.push(user);
    } else {
      acc.push({ rol, users: [user] });
    }
    return acc;
  }, []);
}

export const formatPurchase = (purchase,purchaseDetail) => {
  return {
    ...purchase,
    cantidad_total: getCantidadTotal(purchaseDetail),
    bimestre: getBimestre(purchase),
    fecha: purchase.fecha,
  };
};

export const formatFecha = (fecha) => {
  return (
    format(new Date(fecha), "yyyy-MM-dd")
  );
}