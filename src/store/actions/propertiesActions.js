import axios from "axios";
import { FETCH_PROPERTIES } from "../types/constants";
const baseURL = process.env.REACT_APP_BASEURL;
export const fetchAllProperties = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseURL}properties/fetch-all`);
    if (response.status === 200) {
      dispatch({
        type: FETCH_PROPERTIES,
        payload: response.data,
      });
    }
  } catch (error) {
    window.notify(error.message, "error");
  }
};
export const addProperty =
  (propertyData, ownerData, loader) => async (dispatch) => {
    try {
      loader(true);
      const userToken = localStorage.getItem("token");
      const options = {
        method: "POST",
        url: `${baseURL}properties/add-property`,
        headers: {
          token: userToken,
        },
        data: {
          requirement: propertyData.requirement,
          address: propertyData.address,
          city: propertyData.city,
          finishedType: propertyData.finishedType,
          propertyType: propertyData.propertyType,
          areaCovered: propertyData.areaCovered,
          noOfBedRooms: propertyData.noOfBedRooms,
          noOfBathrooms: propertyData.noOfBathRooms,
          noOfLivingRooms: propertyData.noOfLivingRooms,
          noOfDiningRooms: propertyData.noOfDiningRooms,
          noOfKitchens: propertyData.noOfKitchens,
          noOfReceptionAreas: propertyData.noOfReceptionAreas,
          setAskingPrice: propertyData.setAskingPrice,
          ownerPhoneNumber: ownerData.phoneNumber,
          ownerName: ownerData.firstName,
          ownerUID: ownerData._id,
        },
      };
      let response = await axios.request(options);
      if (response.status === 200) {
        console.log(response.data.response.body);
      }
    } catch (error) {
      window.notify(error, "error");
    }
  };
