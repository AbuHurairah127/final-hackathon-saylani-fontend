import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Lottie from "lottie-react";
import search from "./../../assets/38061-search.json";
import { useSelector } from "react-redux";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
const MyProperties = () => {
  const propertiesList = useSelector(
    (store) => store.propertiesReducer.allProperties
  );
  const cUserUID = useSelector((store) => store.authReducer.cUser._id);

  const myPropertiesList = propertiesList.filter(
    (property) => property.ownerUID === cUserUID
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex justify-evenly items-center min-h-[80vh] flex-wrap py-5">
        {myPropertiesList.length > 0 ? (
          myPropertiesList.map((prop, i) => {
            return <PropertyCard data={prop} key={i} />;
          })
        ) : (
          <>
            <span className="text-3xl font-bold text-center">
              You have not added any properties to sale or rent out.
            </span>
            <div className="w-[40vw] lg:w-[20vw]">
              <Lottie animationData={search} loop={true} />
            </div>

            <Link to="/add-properties">
              <Button label="Sell Property" />
            </Link>
          </>
        )}
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MyProperties;
