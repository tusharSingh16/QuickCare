import React from "react";
import { assets } from "../assets/assets";

const Contacts = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          COUNTACT <span className="text-gray-600 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-8 mb-28 text-sm ">
        <img
          className="w-full md:max-w-[340px] "
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 ">
          <p className="font-semibold text-lg text-gray-500">OUR OFFICE</p>
          <p className="text-gray-500  ">
            136119 NIT KURUKSHETRA <br />
            Thanesar,Haryana,INDIA
          </p>
          <p className="text-gray-500  ">
            Telephone:(+91) 123-131-131 <br />
            Email: quickcare@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-500 ">
            Careers at QuickCare
          </p>
          <p className="text-gray-500  ">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-blue-50 px-8 py-4 text-sm hover:scale-105 duration-500 bg-primary text-white rounded-full ">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
