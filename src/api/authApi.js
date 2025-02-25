import {api} from "@/api";

const authEndpoint = "/auth";

export const login = async (email, password) => {
  const { data } = await api.post(`${authEndpoint}/login`, { email, password });
  return data;
}

export const register = async (name, last_name, email, password) => {
  const { data } = await api.post(`${authEndpoint}/register`, { name, last_name, email, password });
  return data;
}