import { createStore } from "redux";
import { produce } from "immer";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
  token: localStorage.getItem("token"),
  profile: {},
};

export const saveToken = (token) => ({ type: "saveToken", payload: token });
export const deleteToken = () => ({ type: "deleteToken" });
export const saveProfile = (profile) => ({
  type: "saveProfile",
  payload: profile,
});
export const resetProfile = () => ({ type: "resetProfile" });

function reducer(state = initialState, action) {
  if (action.type === "saveToken") {
    localStorage.setItem("token", action.payload);
    return produce(state, (draft) => {
      draft.token = action.payload;
    });
  }

  if (action.type === "deleteToken") {
    localStorage.removeItem("token");
    return produce(state, (draft) => {
      draft.token = "";
    });
  }

  if (action.type === "saveProfile") {
    return produce(state, (draft) => {
      draft.profile = action.payload;
    });
  }
  if (action.type === "resetProfile") {
    return produce(state, (draft) => {
      draft.profile = "";
    });
  }
  return state;
}

export const store = createStore(reducer, initialState, reduxDevtools);
