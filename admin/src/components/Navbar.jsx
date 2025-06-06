import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();
  const logout = () => {
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 border-b py-3 bg-white">
      <div className="flex items-center text-xm gap-2">
        <img className="w-36 sm:w-40 cursor-pointer" src={assets.admin_logo} />
        <p className="border px-3 py-1 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full ">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
