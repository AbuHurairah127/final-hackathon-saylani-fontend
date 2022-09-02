import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, userLogin } from "../../store/actions/authActions";
const useRegister = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const dispatch = useDispatch();
  const [isPasswordAppear, setIsPasswordAppear] = useState(false);
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const onRegisterHandler = (e) => {
    e.preventDefault();
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    if (
      registerData.email === "" ||
      registerData.password === "" ||
      registerData.firstName === "" ||
      registerData.lastName === "" ||
      registerData.userName === "" ||
      registerData.phone === ""
    ) {
      window.notify("Please fill all the input fields properly!", "error");
    } else {
      console.log(registerData);
      dispatch(registerUser(registerData, setButtonLoading));
      setRegisterData({
        firstName: "",
        lastName: "",
        userName: "",
        phone: "",
        email: "",
        password: "",
      });
    }
  };
  return {
    buttonLoading,
    registerData,
    onChangeHandler,
    onRegisterHandler,
    setIsPasswordAppear,
    isPasswordAppear,
  };
};

export default useRegister;
