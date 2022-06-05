import http from "./httpService";

export const getContacts = () => {
  return http.get("contacts");
};
