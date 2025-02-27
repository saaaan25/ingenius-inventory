import {api} from "@/api";

const utilsDeliveryEndpoint = "/api/utils-delivery";

export const getUtilsDeliveries = async () => {
  const {data}= await api.get(utilsDeliveryEndpoint);
  return data;
}

export const createUtilsDelivery = async (utilsDelivery) => {
  const {data}= await api.post(utilsDeliveryEndpoint, utilsDelivery);
  return data;
}

export const updateUtilsDelivery = async (utilsDelivery) => {
  const {data}= await api.patch(utilsDeliveryEndpoint, utilsDelivery);
  return data;
}

export const deleteUtilsDelivery = async (id) => {
  const {data}= await api.delete(`${utilsDeliveryEndpoint}/${id}`);
  return data;
}

export const getUtilsDelivery = async (id) => {
  const {data}= await api.get(`${utilsDeliveryEndpoint}/${id}`);
  return data;
}