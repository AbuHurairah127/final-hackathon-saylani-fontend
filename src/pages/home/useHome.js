import { useSelector } from "react-redux";

const useHome = () => {
  const properties = useSelector(
    (store) => store.propertiesReducer.allProperties
  );
  return { properties };
};

export default useHome;
