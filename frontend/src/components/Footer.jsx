import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        {/*--- LeftSection ---*/}
        <div>
          <img className="mb-5 w-40 " src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/*--- MiddleSection ---*/}
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-500 ">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*--- RighttSection ---*/}
        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-500 ">
            <li>+1-222-141-3522</li>
            <li>quickcare@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------ copyright ------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2024@ QuickCare - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
