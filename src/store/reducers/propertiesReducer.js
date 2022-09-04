import {
  FETCH_PROPERTIES,
  ADD_PROPERTIES,
  DELETE_PROPERTIES,
  UPDATE_PROPERTIES,
  FILTER_PROPERTIES,
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
    case FILTER_PROPERTIES: {
      let newPropertiesList = [];
      if (action.payload.city !== "") {
        state.allProperties.forEach((property) => {
          if (
            property.requirement === action.payload.requirement &&
            property.propertyType === action.payload.propertyType &&
            property.city === action.payload.city
          ) {
            newPropertiesList.push(property);
          }
        });
      }

      if (action.payload.minCoveredArea !== "") {
        state.allProperties.forEach((property) => {
          if (
            property.minCoveredArea >= action.payload.minCoveredArea &&
            property.requirement === action.payload.requirement &&
            property.propertyType === action.payload.propertyType &&
            property.city === action.payload.city
          ) {
            newPropertiesList.push(property);
          }
        });
      }
      if (action.payload.maxCoveredArea !== "") {
        state.allProperties.forEach((property) => {
          if (
            property.maxCoveredArea <= action.payload.maxCoveredArea &&
            property.requirement === action.payload.requirement &&
            property.propertyType === action.payload.propertyType &&
            property.city === action.payload.city
          ) {
            newPropertiesList.push(property);
          }
        });
      }
      if (action.payload.minimumAskingPrice !== "") {
        state.allProperties.forEach((property) => {
          if (
            property.minimumAskingPrice >= action.payload.minimumAskingPrice &&
            property.requirement === action.payload.requirement &&
            property.propertyType === action.payload.propertyType &&
            property.city === action.payload.city
          ) {
            newPropertiesList.push(property);
          }
        });
      }
      if (action.payload.maximumAskingPrice !== "") {
        state.allProperties.forEach((property) => {
          if (
            property.maximumAskingPrice <= action.payload.maximumAskingPrice &&
            property.requirement === action.payload.requirement &&
            property.propertyType === action.payload.propertyType &&
            property.city === action.payload.city
          ) {
            newPropertiesList.push(property);
          }
        });
      }
      if (newPropertiesList.length === 0) {
        window.notify(
          "Sorry! We have no properties matching to your requirements.Please reload!",
          "info"
        );
      }
      if (newPropertiesList.length > 0) {
        return {
          ...state,
          allProperties: newPropertiesList,
        };
      } else {
        return { ...state };
      }
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
