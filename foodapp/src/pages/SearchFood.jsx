import React from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";

const SearchFood = () => {
  return (
    <div className="h-auto flex flex-col">
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center py-10">
    <Search />  
      </div>
    </div>
  );
};

export default SearchFood;
