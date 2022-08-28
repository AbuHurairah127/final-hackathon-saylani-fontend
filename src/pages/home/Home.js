import React from "react";
import Hero from "./../../components/hero/Hero";

import ContactForm from "./../../components/constactUs/ContactForm";
import Bottom from "../../components/bottom/Bottom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PropertyCard from "./../../components/propertyCard/PropertyCard";

const Home = (props) => {
  return (
    <div className="">
      <div className="navbarContainer z-0">
        <Navbar />
      </div>
      <div className="heroContainer z-0">
        <Hero modalOpen={props.modalOpen} />
      </div>
      <div className="flex max-w-screen flex-wrap justify-around">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="contactFormContainer">
        <ContactForm />
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
