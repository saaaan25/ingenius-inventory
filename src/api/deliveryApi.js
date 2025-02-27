import {api} from "@/api";

const deliveryEndpoint = "/api/delivery";

export const getDeliveries = async () => {
  const {data}= await api.get(deliveryEndpoint);
  return data;
}

export const createDelivery = async (delivery) => {
  const {data}= await api.post(deliveryEndpoint, delivery);
  return data;
}

export const updateDelivery = async (delivery) => {
  const {data}= await api.patch(deliveryEndpoint, delivery);
  return data;
}

export const deleteDelivery = async (id) => {
  const {data}= await api.delete(`${deliveryEndpoint}/${id}`);
  return data;
}

export const getDelivery = async (id) => {
  const {data}= await api.get(`${deliveryEndpoint}/${id}`);
  return data;
}