import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Transaction from "../pages/Transaction";
function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default Routers;
