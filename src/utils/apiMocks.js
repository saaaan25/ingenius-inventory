export const postPurchaseApiMock = ({fecha}) => {
  const id = Math.floor(Math.random() * 1000000);
  const total_gastado = Math.floor(Math.random() * 1000000);
  const finalValues = {
    fecha,
    id,
    total_gastado,
  };
  return finalValues;
};

export const postPurchaseDetailApiMock = ({compra, util, cantidad,precio_unitario}) => {
  const id = Math.floor(Math.random() * 1000000);
  const finalValues = {
    precio_unitario,
    compra,
    util,
    cantidad,
    id,
  };
  return finalValues;
};