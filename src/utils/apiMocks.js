import { purchasesData, purchaseDetailData, suppliesData, usersData } from "./data";

//purchase api mocks
export const getPurchasesApiMock = async () => {
  return purchasesData;
};

export const getPurchaseApiMock = async (purchaseId) => {
  return purchasesData.find((purchase) => purchase.id == purchaseId) || null;
};

export const postPurchaseApiMock = async (purchase) => {
  const id = Math.floor(Math.random() * 1000000);
  const total_spent = Math.floor(Math.random() * 1000000);
  const finalValues = {
    ...purchase,
    id,
    total_spent,
  };
  purchasesData.push(finalValues);
  return finalValues;
};

export const putPurchaseApiMock = async (newPurchase) => {
  const total_spent = Math.floor(Math.random() * 1000000);
  const finalValues = {
    ...newPurchase,
    total_spent,
  };
  const index = purchasesData.findIndex((purchase) => purchase.id === newPurchase.id);
  if (index !== -1) {
    purchasesData[index] = finalValues;
  }
  return finalValues;
};

//purchase detail api mocks
export const getPurchasesDetailApiMock = async () => {
  return purchaseDetailData;
};

export const postPurchaseDetailApiMock = async (purchase) => {
  console .log(purchase);
  const id = Math.floor(Math.random() * 1000000);
  const finalValues = {
    ...purchase,
    id,
  };
  purchaseDetailData.push(finalValues);
  console.log(purchaseDetailData);
  return finalValues;
};

export const putPurchaseDetailApiMock = async(purchase) => {
  const index = purchaseDetailData.findIndex((detail) => detail.id == purchase.id);
  if (index!== -1) {
    purchaseDetailData[index] = purchase; 
    
  }
  return purchase;
};

export const deletePurchaseDetailApiMock = async(detailId) => {
  const index = purchaseDetailData.findIndex((detail) => detail.id === detailId);
  if (index !== -1) {
    purchaseDetailData.splice(index, 1);
  }
  return purchaseDetailData;
};

//user api mocks
export const postUserApiMock = async (user) => {
  const id = Math.floor(Math.random() * 1000000);
  const finalValues = {
    ...user,
    id,
  };
  usersData.push(finalValues);
  return finalValues;
};

export const getUsersApiMock = async() => {
  return usersData;
};

export const putUserApiMock = async(newUser) => {
  const index = usersData.findIndex((user) => user.id === newUser.id);
  if (index !== -1) {
    usersData[index] = newUser ;
  }
  return newUser;
};

export const deleteUserApiMock = async(userId) => {
  const index = usersData.findIndex((user) => user.id === userId);
  if (index !== -1) {
    usersData.splice(index, 1);
  }
  return usersData;
};

//supply api mocks
export const getSupplyApiMock = async(utilId) => {
  return suppliesData.find((supply) => supply.id === utilId) || null;
};

export const getSuppliesApiMock = async() => {
  return suppliesData;
};
