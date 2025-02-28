import {api} from "@/api";

const moneyDeliveryEndpoint = "/api/money-delivery";

export const getMoneyDeliveries = async () => {
  const {data}= await api.get(moneyDeliveryEndpoint);
  return data;
}

export const createMoneyDelivery = async (moneyDelivery) => {
  const {data}= await api.post(moneyDeliveryEndpoint, moneyDelivery);
  return data;
}

export const updateMoneyDelivery = async (moneyDelivery) => {
  const {data}= await api.patch(`${moneyDeliveryEndpoint}/${moneyDelivery.money_delivery_id}`, moneyDelivery);
  return data;
}

export const deleteMoneyDelivery = async (id) => {
  const {data}= await api.delete(`${moneyDeliveryEndpoint}/${id}`);
  return data;
}

export const getMoneyDelivery = async (id) => {
  const {data}= await api.get(`${moneyDeliveryEndpoint}/${id}`);
  return data;
}