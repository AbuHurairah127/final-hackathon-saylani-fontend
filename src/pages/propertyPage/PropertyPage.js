import React from "react";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const PropertyPage = () => {
  return (
    <div
      className="max-w-screen flex flex-col items-center justify-between min-h-[100vh] bg-center bg-cover overflow-x-auto"
      style={{
        fontFamily: "work sans",
      }}
    >
      <header className="z-50">
        <Navbar />
      </header>
      <main className="w-full h-full flex">
        <div className="h-full max-w-[60vw]  left">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </div>
        <div className="right  h-full w-[40vw] p-3 flex flex-col justify-center items-center">
          <p className="text-xl text-[#f5843e] text-center underline underline-offset-4 pb-5">
            Owner Details
          </p>
          <div>
            <span className="text-xl text-[#f5843e] pb-3">Owner Name:</span>
            <span className="text-xl  pl-2 pb-3">Abu Hurairah</span>
          </div>
          <div className="flex items-center ">
            <span className="text-xl text-[#f5843e] pb-3">Owner Phone:</span>
            <a href="tel:03207443537" className="pl-3">
              <Button label="03207443537" />
            </a>
          </div>
          <div className="w-full border-b-2 my-3"></div>
          <div className="border-2 p-1 rounded-md border-[#f5843e]">
            <span className="text-xl text-[#f5843e] pb-3">Price:</span>
            <span className="text-xl  pl-2 pb-3">3000000</span>
          </div>
          <div className="self-start">
            <div className="">
              <span className="text-xl text-[#f5843e] pb-3">Area Covered:</span>
              <span className="text-xl  pl-2 pb-3">30000</span>
            </div>
            <div className="self-start">
              <span className="text-xl text-[#f5843e] pb-3">
                Owner Wants to:
              </span>
              <span className="text-xl  pl-2 pb-3">Sale</span>
            </div>
            <div>
              <span className="text-xl text-[#f5843e] pb-3">Address:</span>
              <span className="text-xl  pl-2 pb-3">
                House No. 127/E Block ,Ghulam Muhammad Abad,Faisalabad
              </span>
            </div>
            <div
              className="max-w-[20vw]"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <span className="text-xl text-[#f5843e] pb-3">City:</span>
              <span className="text-xl  pl-2 pb-3">Faisalabad</span>
            </div>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">Property type:</span>
            <span className="text-xl  pl-2 pb-3">Villa</span>
          </div>
          <div className="w-full border-b-2 my-3"></div>
          <div className="self-center pb-5">
            <span className="text-xl text-[#f5843e] text-center underline underline-offset-4">
              Property Details
            </span>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">Finished Type:</span>
            <span className="text-xl  pl-2 pb-3">Fully Furnished</span>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">
              No. of Bedrooms:
            </span>
            <span className="text-xl  pl-2 pb-3">4</span>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">
              No. of Living Rooms:
            </span>
            <span className="text-xl  pl-2 pb-3">4</span>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">
              No. of Bathrooms:
            </span>
            <span className="text-xl  pl-2 pb-3">4</span>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">
              No. of Dining Rooms:
            </span>
            <span className="text-xl  pl-2 pb-3">4</span>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">
              No. of Kitchens:
            </span>
            <span className="text-xl  pl-2 pb-3">4</span>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">
              No. of Reception Areas:
            </span>
            <span className="text-xl  pl-2 pb-3">4</span>
          </div>
          <div className="w-full border-b-2 my-3"></div>
          <div className="self-center pb-5">
            <span className="text-xl text-[#f5843e] text-center underline underline-offset-4">
              Meta
            </span>
          </div>
          <div className="self-start">
            <span className="text-xl text-[#f5843e] pb-3">No. of Likes:</span>
            <span className="text-xl  pl-2 pb-3">4</span>
          </div>
        </div>
      </main>
      <footer className="w-screen">
        <Footer />
      </footer>
    </div>
  );
};

export default PropertyPage;
