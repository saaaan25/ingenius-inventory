import {api} from "@/api";

const requestDetailEndpoint = "/api/request-detail";

export const getRequestDetails = async () => {
  const {data}= await api.get(requestDetailEndpoint);
  return data;
}

export const createRequestDetail = async (requestDetail) => {
  const {data}= await api.post(requestDetailEndpoint, requestDetail);
  return data;
}

export const updateRequestDetail = async (requestDetail) => {
  const {data}= await api.patch(`${requestDetailEndpoint}/${requestDetail.request_detail_id}`, requestDetail);
  return data;
}

export const deleteRequestDetail = async (id) => {
  const {data}= await api.delete(`${requestDetailEndpoint}/${id}`);
  return data;
}

export const getRequestDetail = async (id) => {
  const {data}= await api.get(`${requestDetailEndpoint}/${id}`);
  return data;
}