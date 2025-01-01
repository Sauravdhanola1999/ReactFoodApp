import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import AllRestaurents from "./pages/AllRestaurents";
import SearchFood from "./pages/SearchFood";
import NavBar from "./components/NavBar";

const App = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  return (
    <div>
       {!isLandingPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/restaurents" element={<AllRestaurents />} />
        <Route path="/search" element={<SearchFood />} />
        
      </Routes>
    </div>
  );
};

export default App;
