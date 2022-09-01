import React from "react";
import Hero from "./../../components/hero/Hero";
import Bottom from "../../components/bottom/Bottom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useHome from "./useHome";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import Lottie from "lottie-react";
import search from "./../../assets/38061-search.json";
const Home = (props) => {
  const { properties } = useHome();

  return (
    <div className="">
      <div className="navbarContainer z-0">
        <Navbar />
      </div>
      <div className="heroContainer z-0">
        <Hero modalOpen={props.modalOpen} />
      </div>
      <div className="flex max-w-screen flex-wrap justify-evenly py-8">
        {properties.length > 0 ? (
          properties.map((item, index) => (
            <PropertyCard data={item} key={index} />
          ))
        ) : (
          <>
            <span className="text-3xl font-bold text-center">
              Sorry! We have no properties to show you.
            </span>
            <div className="w-[20vw]">
              <Lottie animationData={search} loop={true} />
            </div>
          </>
        )}
      </div>
      <div className="footerCContainer">
        <Bottom />
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
