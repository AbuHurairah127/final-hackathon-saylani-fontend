const baseURL = process.env.REACT_APP_BASEURL;
import axios from "axios";
import { FETCH_PROPERTIES } from "../types/constants";
export const fetchAllProperties = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseURL}properties/fetch-all`);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: FETCH_PROPERTIES,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
