export const getCantidadTotal = (purchaseDetail) => {
  if(!purchaseDetail) return 0;
  return purchaseDetail.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

export const getBimestre = (purchase) => {
  const date = new Date(purchase.fecha);
  const month = date.getMonth() + 1; 

  if (month <= 6) {
    return 1;
  } else if (month <= 8) {
    return 2;
  } else if (month <= 10) {
    return 3;
  } else {
    return 4;
  }
};