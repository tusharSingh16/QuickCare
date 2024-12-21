import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-600 font-medium ">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img className="w-full md:max-w-[340px] " src={assets.about_image} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-500 ">
          <p>
            Welcome To QuickCare.Your trusted partner in managing your
            healthcare needs conveniently and efficiently. At QuickCare, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            QuickCare is committed to excellence in helthcare technology.We
            continuously strive to enhance our platform ,integrating the latest
            advancements to improve use expreience and deliver superior service.
            Wether you are booking your first appointment or managing ongoing
            care, QuickCare is here to support you at every step of the way.
          </p>
          <b className="text-gray-700 ">OUR VISION</b>
          <p>
            Our vision at QuickCare is to create a seamless healthcare
            expreience for very user.We aim to bridge the gap between patients
            and helthcare provider, making it easier for you to access the care
            you need.When you need it.{" "}
          </p>
        </div>
      </div>
      <div className="text-xl my-4 ">
        <p>
          WHY <span className="text-gray-600  font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[14px] hover:bg-primary hover:text-white transition-all duration-280 text-gray-500 cursor-pointer ">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[14px] hover:bg-primary hover:text-white transition-all duration-280 text-gray-500 cursor-pointer ">
          <b>Convenience:</b>
          <p>
            Access to a network fo trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[14px] hover:bg-primary hover:text-white transition-all duration-280 text-gray-500 cursor-pointer ">
          <b>Personalisation:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
