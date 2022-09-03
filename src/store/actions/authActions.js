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
    window.notify(error.response.data.error, "error");
    console.log(error);
  } finally {
    setButtonLoader(false);
  }
};
export const fetchCurrentUser = () => async (dispatch) => {
  try {
    const userAuthToken = localStorage.getItem("token");
    if (userAuthToken) {
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
    }
  } catch (error) {
    window.notify(error.message, "error");
  }
};
export const userLogout = (setIsLoggingOut) => async (dispatch) => {
  try {
    setIsLoggingOut(true);
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    window.notify(error.massage, "error");
  } finally {
    setIsLoggingOut(false);
  }
};
export const registerUser =
  (registerData, setButtonLoader) => async (dispatch) => {
    try {
      setButtonLoader(true);
      const options = {
        method: "POST",
        url: `${baseURL}auth/register`,
        data: {
          firstName: registerData.firstName,
          lastName: registerData.lastName,
          userName: registerData.userName,
          email: registerData.email,
          phoneNumber: registerData.phone,
          password: registerData.password,
        },
      };
      console.log(options.data);
      const response = await axios.request(options);
      console.log(response);
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
          window.notify("User have been successfully registered.", "success");
        }
      }
    } catch (error) {
      window.notify(error.response.data, "error");
    } finally {
      setButtonLoader(false);
    }
  };
