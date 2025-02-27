import {api} from "@/api";

const requestEndpoint = "/api/request";

export const getRequests = async () => {
  const {data}= await api.get(requestEndpoint);
  return data;
}

export const createRequest = async (request) => {
  const {data}= await api.post(requestEndpoint, request);
  return data;
}

export const updateRequest = async (request) => {
  const {data}= await api.patch(requestEndpoint, request);
  return data;
}

export const deleteRequest = async (id) => {
  const {data}= await api.delete(`${requestEndpoint}/${id}`);
  return data;
}

export const getRequest = async (id) => {
  const {data}= await api.get(`${requestEndpoint}/${id}`);
  return data;
}