import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { updateProperty } from "../../store/actions/propertiesActions";
const useModal = () => {
  const dispatch = useDispatch();
  const [buttonLoader, setButtonLoader] = useState(false);

  const onChangeHandler = (e, updatedPropertyData, setUpdatedPropertyData) => {
    setUpdatedPropertyData({
      ...updatedPropertyData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (
    e,
    updatedPropertyData,
    setUpdatedPropertyData,
    setIsModalOpen
  ) => {
    e.preventDefault();
    setButtonLoader(true);
    setUpdatedPropertyData({
      ...updatedPropertyData,
      [e.target.name]: e.target.value,
    });
    dispatch(
      updateProperty(updatedPropertyData, setButtonLoader, setIsModalOpen)
    );
  };
  return {
    onChangeHandler,
    onSubmitHandler,
    buttonLoader,
  };
};

export default useModal;
