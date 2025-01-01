import React from "react";

const Search = () => {
  return (
    <div className="w-[70%] relative">
      <input
        className="w-[100%] h-[50px] font-medium rounded-md border-2 p-2 focus:outline-none"
        type="text"
        placeholder="Search for restaurant, item or more"
      />
      <i class="fa-solid fa-magnifying-glass text-black absolute top-5 right-5"></i>
    </div>
  );
};

export default Search;
