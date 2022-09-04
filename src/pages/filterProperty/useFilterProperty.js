import { useState } from "react";
import { FILTER_PROPERTIES } from "../../store/types/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const useFilterProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState({
    propertyType: "",
    requirement: "",
    minCoveredArea: "",
    maxCoveredArea: "",
    minimumAskingPrice: "",
    maximumAskingPrice: "",
    city: "",
  });
  const onChangeHandler = (e) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
    if (
      filterData.propertyType === "" ||
      filterData.requirement === "" ||
      filterData.minCoveredArea === "" ||
      filterData.maxCoveredArea === "" ||
      filterData.minimumAskingPrice === "" ||
      filterData.maximumAskingPrice === "" ||
      filterData.city === ""
    ) {
      window.notify("Please fill out all parameters.", "error");
    } else {
      dispatch({ type: FILTER_PROPERTIES, payload: filterData });
      navigate("/");
    }
  };
  return { filterData, onChangeHandler, onSubmitHandler };
};

export default useFilterProperty;
