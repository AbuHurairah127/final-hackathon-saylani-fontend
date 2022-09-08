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
    photo: null,
  });
  const onChangeHandler = (e) => {
    setPropertyData({
      ...propertyData,
      [e.target.name]: e.target.value,
    });
  };
  const onPhotoUploadHandler = (e) => {};
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setButtonLoader(true);
    setPropertyData({
      ...propertyData,
      [e.target.name]: e.target.value,
      // photo: e.target.files[0],
    });
    dispatch(addProperty(propertyData, ownerData, setButtonLoader));
    setPropertyData({
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
      photo: null,
    });
  };
  return {
    onChangeHandler,
    propertyData,
    onSubmitHandler,
    buttonLoader,
    onPhotoUploadHandler,
  };
};

export default useAddProperty;
