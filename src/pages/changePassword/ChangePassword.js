import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import useChangePassword from "./useChangePassword";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";

const ChangePassword = () => {
  const { onChangeHandler, passwordChange, isLoading, onSubmitHandler } =
    useChangePassword();
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex flex-col justify-between items-center"
    >
      <header className="w-screen">
        <Navbar />
      </header>
      <main
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="w-[90vw] rounded-xl"
      >
        <h1 className="text-center text-4xl font-semibold py-4 border-b-2 text-[#023047] border-[#023047]">
          Change Password
        </h1>
        <div className="my-5 px-6">
          <form
            onSubmit={(e) => {
              onSubmitHandler(e);
            }}
          >
            <h1 className="text-center text-lg font-bold mb-4">Old Password</h1>
            <div className="flex justify-around items-center">
              <label htmlFor="currentPassword">
                Enter your Current Password:
              </label>
              <input
                type="text"
                placeholder="Enter Your Current Password"
                id="currentPassword"
                className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
                name="oldPassword"
                value={passwordChange.oldPassword}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                required
              />
            </div>
            <div className="mt-10">
              <h1 className="text-center text-lg font-bold mb-4">
                New Password
              </h1>
              <div className="flex justify-around items-center">
                <label htmlFor="newPassword">Enter your New Password:</label>
                <input
                  type="text"
                  placeholder="Enter Your New Password"
                  id="newPassword"
                  className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
                  name="newPassword"
                  value={passwordChange.newPassword}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  required
                />
              </div>
              <div className="flex justify-around items-center mt-5">
                <label htmlFor="confirmNewPassword">
                  Confirm your new Password:
                </label>
                <input
                  type="text"
                  placeholder="Confirm Your New Password"
                  id="confirmNewPassword"
                  className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
                  name="confirmNewPassword"
                  value={passwordChange.confirmNewPassword}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  required
                />
              </div>
            </div>
            <div className="flex mt-6 w-full items-center justify-center">
              <Button
                label={
                  isLoading ? (
                    <ButtonLoader color="#DE5C0B" />
                  ) : (
                    "Change Password"
                  )
                }
                disabled={isLoading}
                type="submit"
              />
            </div>
          </form>
        </div>
      </main>
      <footer className="w-screen">
        <Footer />
      </footer>
    </div>
  );
};

export default ChangePassword;
