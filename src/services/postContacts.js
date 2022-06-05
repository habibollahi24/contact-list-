import http from "./httpService";

export const postContacts = (data) => {
  return http.post("/contacts", data);
};
