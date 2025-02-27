import {api} from "@/api";

const classroomEndpoint = "/api/classroom";

export const getClassrooms = async () => {
  const {data}= await api.get(classroomEndpoint);
  return data;
}

export const createClassroom = async (classroom) => {
  const {data}= await api.post(classroomEndpoint, classroom);
  return data;
}

export const updateClassroom = async (classroom) => {
  const {data}= await api.patch(classroomEndpoint, classroom);
  return data;
}

export const deleteClassroom = async (id) => {
  const {data}= await api.delete(`${classroomEndpoint}/${id}`);
  return data;
}

export const getClassroom = async (id) => {
  const {data}= await api.get(`${classroomEndpoint}/${id}`);
  return data;
}