import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Footer from "./../../components/footer/Footer";
import PropertyCard from "./../../components/propertyCard/PropertyCard";
import Lottie from "lottie-react";
import search from "./../../assets/94181-like.json";
import { useSelector } from "react-redux";
const LikedProperties = () => {
  const likedProperties = useSelector(
    (store) => store.propertiesReducer.likedProperties
  );
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <header>
        <Navbar />
      </header>
      <div className="my-5 flex max-w-screen flex-wrap items-center justify-evenly py-8">
        {likedProperties.length > 0 ? (
          likedProperties.map((property, i) => <PropertyCard data={property} />)
        ) : (
          <>
            <span className="text-3xl font-bold text-center">
              You have not liked any Property.
            </span>
            <div className="w-[20vw]">
              <Lottie animationData={search} loop={true} />
            </div>
          </>
        )}
      </div>
      <footer className="w-screen">
        <Footer />
      </footer>
    </div>
  );
};

export default LikedProperties;
