import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { addProperty } from "../../store/actions/propertiesActions";
const useAddProperty = () => {
  const dispatch = useDispatch();
  const ownerData = useSelector((store) => store.authReducer.cUser);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [propertyData, setPropertyData] = useState({
    requirement: "",
    address: "",
    city: "",
    finishedType: "",
    propertyType: "",
    areaCovered: "",
    noOfBedRooms: "",
    noOfBathRooms: "",
    noOfLivingRooms: "",
    noOfDiningRooms: "",
    noOfKitchens: "",
    noOfReceptionAreas: "",
    setAskingPrice: "",
    ownerName: "",
    ownerPhoneNumber: "",
    ownerUID: "",
  });
  const onChangeHandler = (e) => {
    setPropertyData({
      ...propertyData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setButtonLoader(true);
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
    dispatch(addProperty(propertyData, ownerData, setButtonLoader));
  };
  return { onChangeHandler, propertyData, onSubmitHandler, buttonLoader };
};

export default useAddProperty;
