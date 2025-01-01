import React from "react";

const Search = () => {
  return (
    <div className="w-[50%] relative">
      <input
        className="w-[100%] h-[56px] rounded-lg border border-gray-300 p-4"
        type="text"
        placeholder="Search for restaurant, item or more"
      />
      <i class="fa-solid fa-magnifying-glass text-black absolute top-5 right-5"></i>
    </div>
  );
};

export default Search;
