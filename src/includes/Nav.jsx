import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { searchContext } from "../App";

const Nav = () => {
  const { showSearch, setShowSearch } = useContext(searchContext);

  // state to control responsiive navbar
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  return (
    <div className="flex justify-between items-center p-4 sm:mx-20 my-1">
      <img
        onClick={() => nav(`/`)}
        src={assets.logo}
        alt=""
        className="w-36 cursor-pointer"
      />

      {/* navigation links for medium and above screens*/}
      <ul className="hidden md:flex gap-5">
        <NavLink to="/" className="flex flex-col items-center">
          <h2 className="font-medium">Home</h2>
          <div className="h-0.5 bg-gray-400 w-1/2 hidden"></div>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center">
          <h2 className="font-medium">Collection</h2>
          <div className="h-0.5 bg-gray-400 w-1/2 hidden"></div>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <h2 className="font-medium">About</h2>
          <div className="h-0.5 bg-gray-400 w-1/2 hidden"></div>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <h2 className="font-medium">Contact</h2>
          <div className="h-0.5 bg-gray-400 w-1/2 hidden"></div>
        </NavLink>
      </ul>

      <div className="flex items-center gap-5 ">
        <img
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-5 cursor-pointer"
          onClick={() => setShow(true)}
        />
        <img
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
          onClick={() => {
            nav("/collection");
            setShowSearch(true)
          }}
        />
        <NavLink to="/login">
          <img src={assets.profile_icon} alt="" className="w-5" />
        </NavLink>

        <div className="relative">
          <img
            src={assets.cart_icon}
            alt=""
            className="w-5 cursor-pointer"
            onClick={() => nav("/cart")}
          />
          <span className="bg-black rounded-full w-4 text-[10px] flex items-center justify-center absolute right-[-5px] bottom-[-5px] text-white">
            0
          </span>
        </div>
      </div>

      {/* navigation links for below medium screens*/}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-white flex-col" ${
          show ? "w-full" : "w-0"
        }`}
      >
        <div className="flex items-center">
          <img
            src={assets.dropdown_icon}
            alt=""
            className="w-5 m-5 cursor-pointer"
            onClick={() => setShow(false)}
          />
          {/* <p>Back</p> */}
        </div>

        <ul className="flex-col gap-10">
          <NavLink
            onClick={() => setShow(false)}
            to="/"
            className="flex flex-col items-center"
          >
            <h2 className="font-medium">Home</h2>
            <div className="h-0.5 bg-gray-400 w-1/2 hidden"></div>
          </NavLink>
          <NavLink
            onClick={() => setShow(false)}
            to="/collection"
            className="flex flex-col items-center"
          >
            <h2 className="font-medium">Collection</h2>
            <div className="h-0.5 bg-gray-400 w-1/2 hidden"></div>
          </NavLink>
          <NavLink
            onClick={() => setShow(false)}
            to="/about"
            className="flex flex-col items-center"
          >
            <h2 className="font-medium">About</h2>
            <div className="h-0.5 bg-gray-400 w-1/2 hidden"></div>
          </NavLink>
          <NavLink
            onClick={() => setShow(false)}
            to="/contact"
            className="flex flex-col items-center"
          >
            <h2 className="font-medium">Contact</h2>
            <div className="h-0.5 bg-gray-400 w-1/2 hidden"></div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
