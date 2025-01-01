import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/swiggylogo.png";
import veggie from "../assets/veggie.avif";
import sushi from "../assets/sushi.avif";
import food from "../assets/c1.avif";

const Landing = () => {
  return (
    <div className="bg-[#FF5200] h-auto">
      <div className="flex justify-between py-12 px-20">
        <img src={logo} alt="" className="h-[48px]" />
        <div className="flex text-white items-center gap-6">
          <p>Swiggy Corporate</p>
          <p>Partner With Us</p>
          <button className="text-white border px-8 py-4 rounded-lg">
            Get The App
            <i className="fa-solid fa-arrow-right fa-rotate-by mx-2"></i>
          </button>
          <button className="bg-black rounded-lg text-white px-8 py-4">
            Sign In
          </button>
        </div>
      </div>
      <div className="flex relative">
        <img
          className="absolute left-0 h-[450px] w-[250px]"
          src={veggie}
          alt=""
        />
        <div className="h-[100%] w-[100%] mx-auto items-center gap-10 flex flex-col">
          <h1 className="text-[48px] text-white text-center">
            Order food & groceries. Discover <br /> best restaurants. Swiggy it!
          </h1>
          <div className="flex justify-center items-center space-x-2 w-[60%]">
            <div className="w-[40%]">
              {/* <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label> */}
              <div class="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <i className="fa-solid fa-location-dot pl-1 text-2xl text-[#e66d0a]"></i>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-[60px] rounded-2xl text-sm font-bold p-4 ps-10 text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Delivery Location"
                  required
                />
                {/* <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                > add toggle for location
                  Search
                </button> */}
              </div>
            </div>
            <div className="w-[60%] relative">
              <Link to="/search">
                <input
                  className="w-[100%] h-[60px] rounded-2xl p-4"
                  type="text"
                  placeholder="Search for restaurant, item or more"
                />
                <i className="fa-solid fa-magnifying-glass text-black absolute top-5 right-5"></i>
              </Link>
            </div>
          </div>
        </div>
        <img
          className="absolute right-0 h-[450px] w-[250px]"
          src={sushi}
          alt=""
        />
      </div>
      <div className="flex flex-row justify-center items-center pt-8">
        <Link to="/restaurents">
          <img src={food} alt="" className="h-[300px]" />
        </Link>
        <img src={food} alt="" className="h-[300px]" />
        <img src={food} alt="" className="h-[300px]" />
        <img src={food} alt="" className="h-[300px]" />
      </div>
    </div>
  );
};

export default Landing;
