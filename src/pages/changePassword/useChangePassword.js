import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { passwordUpdate } from "../../store/actions/authActions";
const useChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [passwordChange, setPasswordChange] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const onChangeHandler = (e) => {
    setPasswordChange({ ...passwordChange, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setPasswordChange({ ...passwordChange, [e.target.name]: e.target.value });
    if (passwordChange.oldPassword !== passwordChange.newPassword) {
      if (passwordChange.newPassword.length > 5) {
        if (passwordChange.newPassword === passwordChange.confirmNewPassword) {
          dispatch(passwordUpdate(passwordChange, setIsLoading));
        } else {
          window.notify(
            "New password and confirm new password must be same.",
            "error"
          );
        }
      } else {
        window.notify("New Password length must be greater than 5.", "error");
      }
    } else {
      window.notify("Old and new password must be different.", "error");
    }
  };
  return { onChangeHandler, passwordChange, isLoading, onSubmitHandler };
};

export default useChangePassword;
