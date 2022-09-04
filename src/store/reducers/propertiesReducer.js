import {
  FETCH_PROPERTIES,
  ADD_PROPERTIES,
  DELETE_PROPERTIES,
  UPDATE_PROPERTIES,
} from "../types/constants";

let initialState = {
  allProperties: [],
};
const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES: {
      let newPropertiesList = action.payload;
      return {
        ...state,
        allProperties: newPropertiesList,
      };
    }

    case ADD_PROPERTIES: {
      let newPropertiesList = [...state.allProperties, action.payload];
      return {
        ...state,
        allProperties: newPropertiesList,
      };
    }
    case DELETE_PROPERTIES: {
      let newPropertiesList = state.allProperties.filter(
        (property) => property._id !== action.payload
      );
      return {
        ...state,
        allProperties: newPropertiesList,
      };
    }
    case UPDATE_PROPERTIES: {
      let newPropertiesList = state.allProperties.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        allProperties: newPropertiesList,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default propertiesReducer;
