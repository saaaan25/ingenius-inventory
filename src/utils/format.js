import { getCantidadTotal, getBimestre } from '@/utils/helpers';
import getSpecificDate from '@/hooks/getSpecificDate';
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

export const formatPurchaseDetail = (purchaseDetail) => {
  return {
    ...purchaseDetail,
    cantidad_total: getCantidadTotal(purchaseDetail),
    bimestre: getBimestre(purchaseDetail),
    fecha: getSpecificDate(purchaseDetail.fecha).fullDate,
  };
};

export const formatObjectFecha = (values) => {
  return {
    ...values,
    fecha: format(new Date(values.fecha), "yyyy-MM-dd"),
  };
}