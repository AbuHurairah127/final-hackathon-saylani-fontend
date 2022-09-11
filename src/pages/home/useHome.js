import { useMemo } from "react";
import { useSelector } from "react-redux";
import propertiesReducer from "../../store/reducers/propertiesReducer";
import { LIKED_PROPERTIES } from "../../store/types/constants";
import { useDispatch } from "react-redux";
const useHome = () => {
  const dispatch = useDispatch();
  const properties = useSelector(
    (store) => store.propertiesReducer.allProperties
  );
  const cUser = useSelector((store) => store.authReducer.cUser);
  const isAuthenticated = useSelector(
    (store) => store.authReducer.isAuthenticated
  );

  const likedProperties = useMemo(
    () =>
      isAuthenticated &&
      properties.length > 0 &&
      properties.filter((property) =>
        property.likedByUsers.includes(cUser._id)
      ),
    [isAuthenticated, properties]
  );
  dispatch({ type: LIKED_PROPERTIES, payload: likedProperties });
  return { properties };
};

export default useHome;
