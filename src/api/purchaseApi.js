import {api} from "@/api";
<<<<<<< HEAD

const purchaseEndpoint = "/api/purchase";

export const getPruchases = async () => {
  const {data}= await api.get(purchaseEndpoint);
  return data;
}

export const createPruchase = async (purchase) => {
  const {data}= await api.post(purchaseEndpoint, purchase);
  return data;
}

export const updatePurchase = async (purchase) => {
  const {data}= await api.patch(purchaseEndpoint, purchase);
  return data;
}

=======
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
>>>>>>> 7741748043941ac5a51fed2fa82cf5a84b59e7ea
export const deletePurchase = async (id) => {
  const {data}= await api.delete(`${purchaseEndpoint}/${id}`);
  return data;
}
<<<<<<< HEAD

export const getPurchase = async (id) => {
  const {data}= await api.get(`${purchaseEndpoint}/${id}`);
  return data;
}
=======
>>>>>>> 7741748043941ac5a51fed2fa82cf5a84b59e7ea
