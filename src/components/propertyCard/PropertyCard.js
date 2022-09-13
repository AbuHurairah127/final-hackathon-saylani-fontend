import React, { useState } from "react";
import Button from "./../../components/button/Button";
import {
  AiOutlineHeart,
  AiFillDelete,
  AiFillEdit,
  AiFillHeart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProperties,
  dislikeProperty,
  likeProperty,
  selectProperty,
} from "../../store/actions/propertiesActions";
import UpdateModal from "../modal/Modal";
import { useMemo } from "react";
const PropertyCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cUser = useSelector((store) => store.authReducer.cUser);
  const isAuthenticated = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  const [updatedPropertyData, setUpdatedPropertyData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onUpdateHandler = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setUpdatedPropertyData(props.data);
  };
  const redirectToLogin = (e) => {
    e.stopPropagation();
    window.notify(
      "You need to first login. Then you can access to other user's credentials or save any post to your wishlist."
    );
    navigate("/login");
  };
  const onDeleteHandler = (uid, photoRef, e) => {
    e.stopPropagation();
    dispatch(deleteProperties(uid, photoRef));
  };
  const onCTALikeHandler = (propertyData, e) => {
    e.stopPropagation();
    if (props.data.likedByUsers.includes(cUser._id)) {
      dispatch(dislikeProperty(propertyData, cUser._id));
    } else {
      dispatch(likeProperty(propertyData, cUser._id));
    }
  };
  const leadToPropertyPage = (propertyData, e) => {
    e.stopPropagation();
    dispatch(selectProperty(propertyData));
    navigate("/property");
  };
  return (
    <>
      <div
        className="group propertyCard w-[30ch] max-h-[425px] rounded-md my-3 bg-[#274773] shadow-md shadow-[#112239] bg-cover bg-no-repeat bg-center pt-[1rem] text-white lg:hover:scale-105 lg:focus-within:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
        style={{
          backgroundImage: `url(${props.data.photoURL})`,
        }}
        onClick={(e) => leadToPropertyPage(props.data, e)}
      >
        <div
          className="info-section w-full pt-12 pb-4 rounded-md px-1 h-full lg:translate-y-[42%] lg:group-hover:translate-y-[0%] lg:group-focus-within:translate-y-[0%] transition-all duration-700 ease-in-out delay-200"
          style={{
            background:
              "linear-gradient(hsl(215 54% 15% / 0),hsl(215 54% 15% / 0.65) 50%,hsl(215, 54%, 15%)",
          }}
        >
          <div
            className="property-title mt-32 w-full relative font-semibold after:absolute after:h-1  after:w-full after:bg-[#F9995D] after:rounded-3xl after:mt-1 after:left-0 after:bottom-0 lg:after:scale-x-0 lg:group-hover:after:scale-100 lg:group-focus-within:after:scale-100 after:transition-all after:duration-700 after:delay-200 after:origin-left"
            style={{
              fontSize: 19,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            A {props.data.propertyType} is available for{" "}
            {props.data.requirement}
          </div>
          <div className="property-owner-name lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all delay-300 duration-1000 ease-in-out text-lg mt-2">
            Owner Name: {props.data.ownerName}
          </div>
          <div className="property-details text-[#F9995D] lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all delay-300 duration-1000 ease-in-out">
            Property Type : {props.data.propertyType}
          </div>

          <div className="property-details w-full max-h-16 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all delay-300 duration-1000 ease-in-out">
            {props.data.address}
          </div>
          <div className="property-details lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all delay-300 duration-1000 ease-in-out">
            City: {props.data.city}
          </div>
          <div className="bottom-section flex justify-around lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all delay-300 duration-1000 ease-in-out">
            {isAuthenticated ? (
              cUser &&
              (props.data.ownerUID === cUser._id ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      onUpdateHandler(e);
                    }}
                  >
                    <AiFillEdit size={28} color="#3a86ff" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) =>
                      onDeleteHandler(props.data._id, props.data.photoRef, e)
                    }
                  >
                    <AiFillDelete size={28} color="red" />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex flex-col">
                    {props.data.likedByUsers.includes(cUser._id) ? (
                      <button
                        type="button"
                        onClick={(e) => onCTALikeHandler(props.data, e)}
                      >
                        <AiFillHeart size={25} color="red" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => onCTALikeHandler(props.data, e)}
                      >
                        <AiOutlineHeart size={25} color="red" />
                      </button>
                    )}
                    <p className="text-white">{props.data.likes} Likes</p>
                  </div>
                  <a
                    href={`tel:${props.data.ownerPhoneNumber}`}
                    className="lg:hidden"
                  >
                    <Button label="Contact Owner" />
                  </a>
                  <a
                    href={`tel:${props.data.ownerPhoneNumber}`}
                    className="hidden lg:inline"
                  >
                    <Button label={props.data.ownerPhoneNumber} />
                  </a>
                </>
              ))
            ) : (
              <>
                <button type="button" onClick={redirectToLogin}>
                  <AiOutlineHeart size={25} color="red" />
                </button>
                <Button
                  label="Contact Owner"
                  type="button"
                  event={redirectToLogin}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <UpdateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        updatedPropertyData={updatedPropertyData}
        setUpdatedPropertyData={setUpdatedPropertyData}
      />
    </>
  );
};

export default PropertyCard;
