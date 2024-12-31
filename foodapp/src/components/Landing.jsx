import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/swiggylogo.png";
import veggie from "../assets/veggie.avif";
import sushi from "../assets/sushi.avif";
import food from "../assets/c1.avif";

const Landing = () => {
  return (
    <div className="bg-red-600 h-auto">
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
        <div className="border h-[100%] border-black w-[70%] mx-auto items-center gap-10 flex flex-col">
          <h1 className="text-[48px] text-white text-center">
            Order food & groceries. Discover <br /> best restaurants. Swiggy it!
          </h1>
          <div className="w-[50%] relative">
            <input
              className="w-[100%] h-[56px] rounded-lg p-4"
              type="text"
              placeholder="Search for restaurant, item or more"
            />
            <i class="fa-solid fa-magnifying-glass text-black absolute top-5 right-5"></i>
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

        <img
          src={food}
          alt=""
          className="h-[300px]"
        />
        <img
          src={food}
          alt=""
          className="h-[300px]"
        />
        <img
          src={food}
          alt=""
          className="h-[300px]"
        />
      </div>
    </div>
  );
};

export default Landing;
