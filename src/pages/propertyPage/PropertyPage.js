import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
const PropertyPage = () => {
  const propertyData = useSelector(
    (store) => store.propertiesReducer.selectedProperty
  );
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
      <main className={"w-full h-full flex flex-wrap"}>
        {propertyData === null ? (
          <div className="flex w-full h-full items-center justify-center">
            <span className="text-center text-xl">
              You have not selected any property yet.
              <br /> Go to&nbsp;
              <Link to="/" className="underline text-blue-600">
                home
              </Link>
              &nbsp; and select a property.
            </span>
          </div>
        ) : (
          <>
            <div className="h-full w-full lg:max-w-[60vw]  left">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt=""
              />
            </div>
            <div className="right w-full h-full lg:w-[40vw] p-3 flex flex-col justify-center items-center">
              <p className="text-xl text-[#f5843e] text-center underline underline-offset-4 pb-5">
                Owner Details
              </p>
              <div>
                <span className="text-xl text-[#f5843e] pb-3">Owner Name:</span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.ownerName}
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-xl text-[#f5843e] pb-3">
                  Owner Phone:
                </span>
                <a
                  href={`tel:${propertyData.ownerPhoneNumber}`}
                  className="pl-3"
                >
                  <Button label={propertyData.ownerPhoneNumber} />
                </a>
              </div>
              <div className="w-full border-b-2 my-3"></div>
              <div className="border-2 p-1 rounded-md border-[#f5843e]">
                <span className="text-xl text-[#f5843e] pb-3">Price:</span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.setAskingPrice}
                </span>
              </div>
              <div className="self-start">
                <div className="">
                  <span className="text-xl text-[#f5843e] pb-3">
                    Area Covered:
                  </span>
                  <span className="text-xl  pl-2 pb-3">
                    {propertyData.areaCovered}
                  </span>
                </div>
                <div className="self-start">
                  <span className="text-xl text-[#f5843e] pb-3">
                    Owner Wants to:
                  </span>
                  <span className="text-xl  pl-2 pb-3">
                    {propertyData.requirement}
                  </span>
                </div>
                <div>
                  <span className="text-xl text-[#f5843e] pb-3">Address:</span>
                  <span className="text-xl  pl-2 pb-3">
                    {propertyData.address}
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
                  <span className="text-xl  pl-2 pb-3">
                    {propertyData.city}
                  </span>
                </div>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  Property type:
                </span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.propertyType}
                </span>
              </div>
              <div className="w-full border-b-2 my-3"></div>
              <div className="self-center pb-5">
                <span className="text-xl text-[#f5843e] text-center underline underline-offset-4">
                  Property Details
                </span>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  Finished Type:
                </span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.finishedType}
                </span>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  No. of Bedrooms:
                </span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.noOfBedRooms}
                </span>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  No. of Living Rooms:
                </span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.noOfLivingRooms}
                </span>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  No. of Bathrooms:
                </span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.noOfBathrooms}
                </span>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  No. of Dining Rooms:
                </span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.noOfDiningRooms}
                </span>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  No. of Kitchens:
                </span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.noOfKitchens}
                </span>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  No. of Reception Areas:
                </span>
                <span className="text-xl  pl-2 pb-3">
                  {propertyData.noOfReceptionAreas}
                </span>
              </div>
              <div className="w-full border-b-2 my-3"></div>
              <div className="self-center pb-5">
                <span className="text-xl text-[#f5843e] text-center underline underline-offset-4">
                  Meta
                </span>
              </div>
              <div className="self-start">
                <span className="text-xl text-[#f5843e] pb-3">
                  No. of Likes:
                </span>
                <span className="text-xl  pl-2 pb-3">{propertyData.likes}</span>
              </div>
            </div>
          </>
        )}
      </main>
      <footer className="w-screen">
        <Footer />
      </footer>
    </div>
  );
};

export default PropertyPage;
