import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { userLogout } from "./../../store/actions/authActions";
const useNavbar = () => {
  const dispatch = useDispatch();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const onLogoutHandler = () => {
    dispatch(userLogout(setIsLoggingOut));
  };
  return { isLoggingOut, onLogoutHandler };
};

export default useNavbar;
