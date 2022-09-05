import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const PropertyPage = () => {
  return (
    <div
      className="max-w-screen flex flex-col items-center justify-between h-[100vh] bg-center bg-cover"
      style={{
        fontFamily: "work sans",
        backgroundImage: `linear-gradient(0deg,rgba(2, 48, 71, 0.95),rgba(0, 180, 216, 0.15)),url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`,
      }}
    >
      <header>
        <Navbar />
      </header>
      <main></main>
      <footer className="w-screen">
        <Footer />
      </footer>
    </div>
  );
};

export default PropertyPage;
