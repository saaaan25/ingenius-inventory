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

export const getCantidadTotal = (purchaseDetailData) => {
  return purchaseDetailData.detalle_compra.reduce(
    (total, item) => total + item.cantidad,
    0
  );
};

export const getBimestre = (purchaseDetailData) => {
  const date = new Date(purchaseDetailData.fecha);
  const month = date.getMonth() + 1; // getMonth() returns 0-based month

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