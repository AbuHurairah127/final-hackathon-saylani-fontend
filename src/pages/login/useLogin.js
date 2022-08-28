import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions/authActions";
const useLogin = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const dispatch = useDispatch();
  const [isPasswordAppear, setIsPasswordAppear] = useState(false);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const onLoginHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    if (loginData.userName === "" || loginData.password === "") {
      window.notify("Please fill all the input fields properly!", "error");
    } else {
      dispatch(userLogin(loginData, setButtonLoading));
      setLoginData({ userName: "", password: "" });
    }
  };
  return {
    buttonLoading,
    loginData,
    onChangeHandler,
    onLoginHandler,
    setIsPasswordAppear,
    isPasswordAppear,
  };
};

export default useLogin;
