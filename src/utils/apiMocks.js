import { purchasesData, purchaseDetailData} from "./data";

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
