import React from "react";
import { Cloudinary_URL } from "../utils/Constants";

const TopRestaurents = ({ data }) => {
  return (
    <div className="flex h-[40vw] w-[80vw] my-10">
      <h1 className="pr-5 font-extrabold text-2xl">
        Top restaurant chains in Delhi
      </h1>
      {/* {data.map((item) => {
        return ( */}
      <div class="relative flex h-auto flex-col my-16 w-80">
        <div class="relative m-2.5 overflow-hidden text-white">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            // {Cloudinary_URL + item.imageId}
            alt="card-image"
            className="rounded-2xl"
          />
        </div>
        <div class="px-4">
          <h6 class="text-slate-800 text-xl font-semibold">
            {/* {item.name} */} MacDoLund
          </h6>
          <p class="text-slate-600 leading-normal font-light">
            <i class="fa-solid fa-star text-[#2df505]"></i>
            Barcelona
          </p>
          <p class="text-slate-600 leading-normal font-light">American</p>
          <p class="text-slate-600 leading-normal font-light">Rajendra Place</p>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default TopRestaurents;
