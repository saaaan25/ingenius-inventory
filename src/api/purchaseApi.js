import {api} from "@/api";
const purchaseEndpoint = "/api/purchase";

export const getPurchases = async () => {
  const {data}= await api.get(purchaseEndpoint);
  return data;
}
export const getPurchase = async (id) => {
  const {data}= await api.get(`${purchaseEndpoint}/${id}`);
  return data;
}
export const createPurchase = async (purchase) => {
  const {data}= await api.post(purchaseEndpoint, purchase);
  return data;
}
export const updatePurchase = async (purchase) => {
  const {data}= await api.patch(`${purchaseEndpoint}/${purchase.id}`, purchase);
  return data;
}
export const deletePurchase = async (id) => {
  const {data}= await api.delete(`${purchaseEndpoint}/${id}`);
  return data;
}