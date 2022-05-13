import axios from "axios";

// Get the connexion token
export const getLogin = (email, password) => {
  return axios.post("http://localhost:3001/api/v1/user/login", {
    email: email,
    password: password,
  });
};

// Get the profile of the corresponding token
export const getProfile = () => {
  return axios.post(
    "http://localhost:3001/api/v1/user/profile",
    {},
    {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }
  );
};

// Update the profile of the corresponding token
export const updateProfile = (firstName, lastName) => {
  return axios.put(
    "http://localhost:3001/api/v1/user/profile",
    {
      firstName: firstName,
      lastName: lastName,
    },
    {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }
  );
};
