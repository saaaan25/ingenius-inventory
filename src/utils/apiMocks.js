import { purchasesData, purchaseDetailData, suppliesData, usersData } from "./data";

//purchase api mocks
export const getPurchasesApiMock = () => {
  return purchasesData;
};

export const getPurchaseApiMock = (purchaseId) => {
  return purchasesData.find((purchase) => purchase.id == purchaseId) || null;
};

export const postPurchaseApiMock = ({ fecha }) => {
  const id = Math.floor(Math.random() * 1000000);
  const total_gastado = Math.floor(Math.random() * 1000000);
  const finalValues = {
    fecha,
    id,
    total_gastado,
  };
  purchasesData.push(finalValues);
  return finalValues;
};

export const putPurchaseApiMock = ({ id, fecha }) => {
  const total_gastado = Math.floor(Math.random() * 1000000);
  const finalValues = {
    fecha,
    id,
    total_gastado,
  };
  const index = purchasesData.findIndex((purchase) => purchase.id === id);
  if (index !== -1) {
    purchasesData[index] = finalValues;
  }
  return finalValues;
};

//purchase detail api mocks
export const getPurchaseDetailByPurchaseIdApiMock = (purchaseId) => {
  return purchaseDetailData.filter((detail) => detail.compra === purchaseId);
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
  purchaseDetailData.push(finalValues);
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
  console.log(finalValues);
  const index = purchaseDetailData.findIndex((detail) => detail.id == id);
  if (index) {
    purchaseDetailData[index] = finalValues ;
  }
  return finalValues;
};

export const deletePurchaseDetailApiMock = (detailId) => {
  const index = purchaseDetailData.findIndex((detail) => detail.id === detailId);
  if (index !== -1) {
    purchaseDetailData.splice(index, 1);
  }
  return purchaseDetailData;
};

//user api mocks
export const postUserApiMock = ({ nombre, apellido, email, rol, imagen, contrasena }) => {
  const id = Math.floor(Math.random() * 1000000);
  const finalValues = {
    nombre,
    apellido,
    email,
    rol,
    id,
    imagen,
    contrasena,
  };
  usersData.push(finalValues);
  return finalValues;
};

export const getUsersApiMock = () => {
  return usersData;
};

export const putUserApiMock = ({ id, nombre, apellido, email, rol, imagen, contrasena }) => {
  const finalValues = {
    nombre,
    apellido,
    email,
    rol,
    id,
    imagen,
    contrasena,
  };
  const index = usersData.findIndex((user) => user.id === id);
  if (index !== -1) {
    usersData[index] = { finalValues };
  }
  return finalValues;
};

export const deleteUserApiMock = (userId) => {
  const index = usersData.findIndex((user) => user.id === userId);
  if (index !== -1) {
    usersData.splice(index, 1);
  }
  return usersData;
};

//supply api mocks
export const getSupplyApiMock = (utilId) => {
  return suppliesData.find((supply) => supply.id === utilId) || null;
};

export const getSuppliesApiMock = () => {
  return suppliesData;
};
