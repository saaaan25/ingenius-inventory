import {api} from "@/api";

const userEndpoint = "/api/user";

export const getUsers = async () => {
  const {data}= await api.get(userEndpoint);
  return data;
}

export const createUser = async (user) => {
  const {data}= await api.post(userEndpoint, user);
  return data;
}

export const updateUser = async (user) => {
  const {data}= await api.put(userEndpoint, user);
  return data;
}

export const deleteUser = async (id) => {
  const {data}= await api.delete(`${userEndpoint}/${id}`);
  return data;
}

export const getUser = async (id) => {
  const {data}= await api.get(`${userEndpoint}/${id}`);
  return data;
}