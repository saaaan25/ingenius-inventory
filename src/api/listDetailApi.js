import {api} from "@/api";

const listDetailEndpoint = "/api/list-detail";

export const getListDetails = async () => {
  const {data}= await api.get(listDetailEndpoint);
  return data;
}

export const createListDetail = async (listDetail) => {
  const {data}= await api.post(listDetailEndpoint, listDetail);
  return data;
}

export const updateListDetail = async (listDetail) => {
  const {data}= await api.patch(listDetailEndpoint, listDetail);
  return data;
}

export const deleteListDetail = async (id) => {
  const {data}= await api.delete(`${listDetailEndpoint}/${id}`);
  return data;
}

export const getListDetail = async (id) => {
  const {data}= await api.get(`${listDetailEndpoint}/${id}`);
  return data;
}