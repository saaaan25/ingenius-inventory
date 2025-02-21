import {api} from "@/api";

const utilEndpoint = "/api/util";

export const getUtils = async () => {
  const {data}= await api.get(utilEndpoint);
  return data;
}

export const createUtil = async (util) => {
  const {data}= await api.post(utilEndpoint, util);
  return data;
}

export const updateUtil = async (util) => {
  const {data}= await api.put(utilEndpoint, util);
  return data;
}

export const deleteUtil = async (id) => {
  const {data}= await api.delete(`${utilEndpoint}/${id}`);
  return data;
}

export const getUtil = async (id) => {
  const {data}= await api.get(`${utilEndpoint}/${id}`);
  return data;
}