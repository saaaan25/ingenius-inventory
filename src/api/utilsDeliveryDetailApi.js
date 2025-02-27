import {api} from "@/api";

const utilsDeliveryDetailEndpoint = "/api/utils-delivery-detail";

export const getUtilsDeliveryDetails = async () => {
  const {data}= await api.get(utilsDeliveryDetailEndpoint);
  return data;
}

export const createUtilsDeliveryDetail = async (utilsDeliveryDetail) => {
  const {data}= await api.post(utilsDeliveryDetailEndpoint, utilsDeliveryDetail);
  return data;
}

export const updateUtilsDeliveryDetail = async (utilsDeliveryDetail) => {
  const {data}= await api.patch(utilsDeliveryDetailEndpoint, utilsDeliveryDetail);
  return data;
}

export const deleteUtilsDeliveryDetail = async (id) => {
  const {data}= await api.delete(`${utilsDeliveryDetailEndpoint}/${id}`);
  return data;
}

export const getUtilsDeliveryDetail = async (id) => {
  const {data}= await api.get(`${utilsDeliveryDetailEndpoint}/${id}`);
  return data;
}