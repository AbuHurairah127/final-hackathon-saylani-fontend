import { combineReducers } from "redux";
import authReducer from "./authReducer";
import propertiesReducer from "./propertiesReducer";
const rootReducer = combineReducers({
  authReducer,
  propertiesReducer,
});
export default rootReducer;
