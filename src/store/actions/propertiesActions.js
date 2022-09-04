import axios from "axios";
import {
  ADD_PROPERTIES,
  DELETE_PROPERTIES,
  FETCH_PROPERTIES,
  UPDATE_PROPERTIES,
} from "../types/constants";
const baseURL = process.env.REACT_APP_BASEURL;
export const fetchAllProperties = (setPreLoader) => async (dispatch) => {
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
  } finally {
    setTimeout(() => {
      setPreLoader(false);
    }, 2500);
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
        dispatch({
          type: ADD_PROPERTIES,
          payload: options.data,
        });
        window.notify(response.data.response.body.message, "success");
        console.log(response);
      }
    } catch (error) {
      window.notify(error, "error");
    } finally {
      loader(false);
    }
  };
export const deleteProperties = (uid) => async (dispatch) => {
  try {
    const options = {
      method: "DELETE",
      url: `${baseURL}properties/delete-property/${uid}`,
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    let response = await axios.request(options);
    if (response.status === 200) {
      window.notify(response.data.message, "success");
      dispatch({
        type: DELETE_PROPERTIES,
        payload: uid,
      });
    }
  } catch (error) {
    window.notify(error.message, "error");
  }
};
export const updateProperty =
  (propertyData, setButtonLoader, setIsModalOpen) => async (dispatch) => {
    try {
      const options = {
        method: "PUT",
        url: `${baseURL}properties/update-property/${propertyData._id}`,
        headers: {
          "Content-Type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwYzFhYTJkZmZmNTVmYzNiY2E0NmVmIn0sImlhdCI6MTY2MTczODM3MH0.YkwEbJDSM_DfF7M1YWFZjcfs3tUhNENIT9Q6VFPg18o",
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
          ownerName: propertyData.ownerName,
          ownerPhoneNumber: propertyData.ownerPhoneNumber,
          ownerUID: propertyData.ownerUID,
          updatedAt: new Date(),
        },
      };
      const response = await axios.request(options);
      if (response.status === 200) {
        dispatch({
          type: UPDATE_PROPERTIES,
          payload: propertyData,
        });
        window.notify(response.data.message, "success");
        setIsModalOpen(false);
      }
    } catch (error) {
      window.notify(error.message, "error");
    } finally {
      setButtonLoader(false);
    }
  };
