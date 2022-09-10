import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { addProperty } from "../../store/actions/propertiesActions";
import { storage } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
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
  const onPhotoChangeHandler = (e) => {
    setPropertyData({
      ...propertyData,
      photo: e.target.files[0],
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setButtonLoader(true);
    setPropertyData({
      ...propertyData,
      [e.target.name]: e.target.value,
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
  const onPhotoUploadHandler = (e) => {
    setPropertyData({
      ...propertyData,
      photo: e.target.files,
    });
    const storageRef = ref(storage, `images/${propertyData.photo.name}`);
    uploadBytes(storageRef, propertyData.photo).then(() => {
      alert("Uploaded a blob or file!");
    });
    console.log(propertyData.photo);
  };
  return {
    onChangeHandler,
    propertyData,
    onSubmitHandler,
    buttonLoader,
    onPhotoChangeHandler,
    onPhotoUploadHandler,
  };
};

export default useAddProperty;
