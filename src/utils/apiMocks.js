import { purchasesData, purchaseDetailData, suppliesData, usersData } from "./data";

//purchase api mocks
export const getPurchaseApiMock = () => {
  return purchasesData;
};

export const getPurchaseDetailByPurchaseIdApiMock = (purchaseId) => {
  return purchaseDetailData.filter((detail) => detail.compra === purchaseId);
};

export const postPurchaseApiMock = ({ fecha }) => {
  const id = Math.floor(Math.random() * 1000000);
  const total_gastado = Math.floor(Math.random() * 1000000);
  const finalValues = {
    fecha,
    id,
    total_gastado,
  };
  return finalValues;
};

export const postPurchaseDetailApiMock = ({
  compra,
  util,
  cantidad,
  precio_unitario,
}) => {
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

export const putPurchaseApiMock = ({ id, fecha }) => {
  const total_gastado = Math.floor(Math.random() * 1000000);
  const finalValues = {
    fecha,
    id,
    total_gastado,
  };
  return finalValues;
};

export const putPurchaseDetailApiMock = ({
  compra,
  util,
  cantidad,
  precio_unitario,
  id,
}) => {
  const finalValues = {
    precio_unitario,
    compra,
    util,
    cantidad,
    id,
  };
  return finalValues;
};

//user api mocks
export const postUserApiMock = ({ nombre, apellido, email, rol }) => {
  const id = Math.floor(Math.random() * 1000000);
  const finalValues = {
    nombre,
    apellido,
    email,
    rol,
    id,
  };
  return finalValues;
};
export const getUsersApiMock=()=>{
  return usersData;
}
export const putUserApiMock = ({ id, nombre, apellido, email, rol }) => {
  const finalValues = {
    nombre,
    apellido,
    email,
    rol,
    id,
  };
  return finalValues;
};

//supply api mocks
export const getSupplyApiMock=(utilId)=> {
   return suppliesData.find((supply) => supply.id === utilId) || null;
};

export const getSuppliesApiMock = () => {
  return suppliesData;
}
