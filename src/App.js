import "./App.css";
import "@fontsource/work-sans";
import React, { useEffect, useState } from "react";
import Routing from "./routing/Routing";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./store/actions/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  });
  return (
    <div>
      <div
        className="flex flex-column justify-center items-center overflow-x-hidden"
        style={{
          fontFamily: "work sans",
        }}
      >
        <Routing />
      </div>
    </div>
  );
}

export default App;
