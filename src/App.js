import "./App.css";
import "@fontsource/work-sans";
import React, { useEffect, useState } from "react";

import Routing from "./routing/Routing";
import PropertyCard from "./components/propertyCard/PropertyCard";
function App() {
  return (
    <div>
      <div className="flex flex-column justify-center items-center overflow-x-hidden">
        <Routing />
      </div>
    </div>
  );
}

export default App;
