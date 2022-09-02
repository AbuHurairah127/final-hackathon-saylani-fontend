import { LOGIN, LOGOUT } from "../types/constants";
import axios from "axios";
const baseURL = process.env.REACT_APP_BASEURL;
export const userLogin = (data, setButtonLoader) => async (dispatch) => {
  setButtonLoader(true);
  const options = {
    method: "POST",
    url: `${baseURL}auth/login`,
    data: { email: data.email, password: data.password },
  };
  try {
    const response = await axios.request(options);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.authToken);
      const userToken = {
        method: "POST",
        url: `${baseURL}auth/user-data`,
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      const userData = await axios.request(userToken);
      if (userData.status === 200) {
        dispatch({
          type: LOGIN,
          payload: userData.data.user,
        });
        window.notify("User have been successfully signed in.", "success");
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setButtonLoader(false);
  }
};
export const fetchCurrentUser = (setPreLoader) => async (dispatch) => {
  const userToken = {
    method: "POST",
    url: `${baseURL}auth/user-data`,
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  const userData = await axios.request(userToken);
  if (userData.status === 200) {
    dispatch({
      type: LOGIN,
      payload: userData.data.user,
    });
  }
};
export const userLogout = (setIsLoggingOut) => async (dispatch) => {};
export const passwordUpdate = (data, setIsLoading) => async (dispatch) => {};
