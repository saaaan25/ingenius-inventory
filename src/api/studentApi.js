import {api} from "@/api";

const studentEndpoint = "/api/student";

export const getStudents = async () => {
  const {data}= await api.get(studentEndpoint);
  return data;
}

export const createStudent = async (student) => {
  const {data}= await api.post(studentEndpoint, student);
  return data;
}

export const updateStudent = async (student) => {
  const {data}= await api.patch(studentEndpoint, student);
  return data;
}

export const deleteStudent = async (id) => {
  const {data}= await api.delete(`${studentEndpoint}/${id}`);
  return data;
}

export const getStudent = async (id) => {
  const {data}= await api.get(`${studentEndpoint}/${id}`);
  return data;
}