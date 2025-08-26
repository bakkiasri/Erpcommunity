import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router } from "react-router-dom";
import Routers from "./routes/route";
function App() {
  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;
