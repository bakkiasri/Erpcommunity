import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Routers;
