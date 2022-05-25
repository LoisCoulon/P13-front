import axios from "axios";
const baseUrl = "http://localhost:3001/api/v1/";

/**
 * Get the connexion token
 * @param {string} email
 * @param {string} password
 * @returns
 */
export const getLogin = (email, password) => {
  return axios.post(baseUrl + "user/login", {
    email,
    password,
  });
};

/**
 * Get the profile of the corresponding token
 * @returns
 */
export const getProfile = () => {
  return axios.post(
    baseUrl + "user/profile",
    {},
    {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }
  );
};

/**
 * Update the profile of the corresponding token
 * @param {string} firstName
 * @param {string} lastName
 * @returns
 */
export const updateProfile = (firstName, lastName) => {
  return axios.put(
    baseUrl + "user/profile",
    {
      firstName,
      lastName,
    },
    {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }
  );
};
