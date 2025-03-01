import {api} from '@/api';
const purchaseDetailEndpoint = '/api/purchase-detail';

export const getPurchaseDetails = async () => {
  const {data} = await api.get(purchaseDetailEndpoint);
  return data;
};
export const getPurchaseDetail = async (id) => {
  const {data} = await api.get(`${purchaseDetailEndpoint}/${id}`);
  return data;
};
export const createPurchaseDetail = async (purchaseDetail) => {
  const {data} = await api.post(purchaseDetailEndpoint, purchaseDetail);
  return data;
};
export const updatePurchaseDetail = async (purchaseDetail) => {
  const {data} = await api.patch(`${purchaseDetailEndpoint}/${purchaseDetail.id}`, purchaseDetail);
  return data;
};
export const deletePurchaseDetail = async (id) => {
  const {data} = await api.delete(`${purchaseDetailEndpoint}/${id}`);
  return data;
};