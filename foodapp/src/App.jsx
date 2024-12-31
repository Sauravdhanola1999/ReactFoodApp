import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import AllRestaurents from "./components/AllRestaurents";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/restaurents" element={<AllRestaurents />} />
      </Routes>
    </div>
  );
};

export default App;
