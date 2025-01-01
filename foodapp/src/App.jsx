import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AllRestaurents from "./pages/AllRestaurents";
import SearchFood from "./pages/SearchFood";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/restaurents" element={<AllRestaurents />} />
        <Route path="/search" element={<SearchFood />} />
      </Routes>
    </div>
  );
};

export default App;
