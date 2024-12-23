import React, { useDebugValue, useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Abhishek Upmanyu",
    image: assets.profile_pic,
    email: "demouser@gmail.com",
    mobile: "+91 1234567898",
    address: {
      line1: "nit kurukshetra",
      line2: "haryana ,India",
    },
    gender: "male",
    dob: "2001-12-12",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded " src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-100 text-3xl font-medium max-w-60 mt-4 "
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
          type="text"
        />
      ) : (
        <p className="font-medium text-2xl text-gray-600 mt-4 ">
          {userData.name}
        </p>
      )}
      <hr className="bg-gray-400 h-[1px] border-none" />
      <div>
        <p className="text-gray-700 underline mt-3 ">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 text-gray-500 mt-3">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-400">{userData.email}</p>
          <p className="font-medium">Mobile:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, mobile: e.target.value }))
              }
              value={userData.mobile}
              type="text"
            />
          ) : (
            <p className="text-blue-400">{userData.mobile}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                type="text"
                className="bg-gray-100 "
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
              />
              <br />
              <input
                type="text"
                className="bg-gray-100 "
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-gray-700 underline mt-3 ">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-gray-500">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100 "
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}
          <p className="font-medium">Birthdate:</p>
          {isEdit ? (
            <input
              type="date"
              className="max-w-28 bg-gray-100 "
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border text-base border-primary px-8 py-2 rounded-full hover:bg-primary hover:scale-105 duration-500 hover:text-white "
            onClick={() => setIsEdit(false)}>
            Save information
          </button>
        ) : (
          <button
            className="border text-base border-primary px-8 py-2 rounded-full hover:bg-primary hover:scale-105 duration-500 hover:text-white"
            onClick={() => setIsEdit(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
