import "./App.css";
import "@fontsource/work-sans";
import React, { useEffect, useState } from "react";
import Routing from "./routing/Routing";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./store/actions/authActions";
import FullScreenLoader from "./components/fullScreenLoader/FullScreenLoader";

function App() {
  const dispatch = useDispatch();
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    dispatch(fetchCurrentUser(setPreLoader));
  });
  return (
    <div>
      <div
        className="flex flex-column justify-center items-center overflow-x-hidden"
        style={{
          fontFamily: "work sans",
        }}
      >
        {preLoader ? <FullScreenLoader /> : <Routing />}
      </div>
    </div>
  );
}

export default App;
