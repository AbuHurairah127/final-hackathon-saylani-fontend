import { FETCH_PROPERTIES } from "../types/constants";

let initialState = {
  properties: [],
};
const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES: {
      let newPropertiesList = action.payload;
      return {
        ...state,
        properties: newPropertiesList,
      };
    }

    default:
      return {
        ...state,
      };
  }
  return;
};

export default propertiesReducer;
