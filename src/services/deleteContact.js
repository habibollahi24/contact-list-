import http from "./httpService";

export const deleteOneContact = (id) => {
  return http.delete(`contacts/${id}`);
};
