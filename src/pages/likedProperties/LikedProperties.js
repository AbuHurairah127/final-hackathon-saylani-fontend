import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Footer from "./../../components/footer/Footer";
const LikedProperties = () => {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <header>
        <Navbar />
      </header>
      <footer className="w-screen">
        <Footer />
      </footer>
    </div>
  );
};

export default LikedProperties;
