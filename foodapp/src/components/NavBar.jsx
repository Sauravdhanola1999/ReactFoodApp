import React from "react";
import { Link } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav className="w-full px-20 py-4 shadow-md">
      <div className="flex flex-wrap items-center justify-between">
        <Link to="/">
          <img
            src="https://cdn.brandfetch.io/idQZk-y8Sy/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt=""
            className="h-[50px] object-cover rounded-2xl"
          />
        </Link>
        <div className="">
          <ul className="flex flex-row gap-6 space-x-6">
            <li className="hover:text-[#FF5200] text-[#3d4152]">
              <a href="">
                <i class="fa-solid fa-suitcase px-1"></i> Swiggy Corporate{" "}
              </a>
            </li>
            <li className="hover:text-[#FF5200] text-[#3d4152]">
              <a href="">
                <i class="fa-solid fa-magnifying-glass px-1"></i> Search
              </a>
            </li>
            <li className="flex items-center gap-2 text-[#3d4152] hover:text-[#FF5200]">
              <BiSolidOffer className="text-xl" />
              <a href=""> Offers</a>
            </li>
            <li className="hover:text-[#FF5200] text-[#3d4152]">
              <a href="">
                <i class="fa-solid fa-handshake-angle px-2"></i>
                Help
              </a>
            </li>
            <li className="hover:text-[#FF5200] text-[#3d4152]">
              <a href="">
                <i class="fa-solid fa-user px-2"></i>
                Sign In
              </a>
            </li>
            <li className="hover:text-[#FF5200] text-[#3d4152]">
              <a href="">
                <i class="fa-solid fa-cart-shopping px-2"></i>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
