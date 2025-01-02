import React from "react";
import { Cloudinary_URL } from "../utils/Constants";

const TopRestaurents = ({ data }) => {
  return (
    <div className="flex">
      {/* {data.map((item) => {
        return ( */}
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src=""
              // {Cloudinary_URL + item.imageId} 
              alt="card-image" />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                {/* {item.name} */} I am King
                
              </h6>
              <p class="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Read more
              </button>
            </div>
          </div>
        {/* );
      })} */}
    </div>
  );
};

export default TopRestaurents;
