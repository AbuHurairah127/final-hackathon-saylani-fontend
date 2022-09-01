import { useSelector } from "react-redux";

const useHome = () => {
  const properties = useSelector((store) => store.propertiesReducer.properties);
  return { properties };
};

export default useHome;
