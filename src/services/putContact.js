import http from "./httpService";

export const putContact = (id, data) => {
  return http.put(`contacts/${id}`, data);
};
