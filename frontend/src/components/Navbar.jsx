import { useState } from "react";
import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500 ">
      <img
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-center gap-5 font-medium  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }>
          HOME
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }>
          ALL DOCTORS
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }>
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }>
          CONTACT
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-3 " src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100  rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/myprofile")}
                  className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/myappointments")}
                  className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
