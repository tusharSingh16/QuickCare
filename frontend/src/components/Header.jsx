import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-5 md:px-8 lg:px-18">
      {/* ------- LeftSide ------- */}
      <div className="md:w-1/2 flex flex-col itmes-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p className=" text-3xl md:text-4xl lg:text-5xl text-white font-semibold ">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
          <img className="w-28 " src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex w-2/5 items-center gap-2 bg-white px-8 py-3 rounded-full text-sm text-gray-500 m-auto md:m-0 hover:scale-105 transition-all duration-280"
          href="#speciality">
          Book Appointment
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ------- RightSide -------*/}
      <div className="md:w-1/2 relative  ">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-md "
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
