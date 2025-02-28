import {api} from "@/api";

const utilListEndpoint = "/api/util-list";

export const getUtilLists = async () => {
  const {data}= await api.get(utilListEndpoint);
  return data;
}

export const createUtilList = async (utilList) => {
  const {data}= await api.post(utilListEndpoint, utilList);
  return data;
}

export const updateUtilList = async (utilList) => {
  const {data}= await api.patch(`${utilListEndpoint}/${utilList.util_list_id}`, utilList);
  return data;
}

export const deleteUtilList = async (id) => {
  const {data}= await api.delete(`${utilListEndpoint}/${id}`);
  return data;
}

export const getUtilList = async (id) => {
  const {data}= await api.get(`${utilListEndpoint}/${id}`);
  return data;
}