import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloundinary } from "cloudinary";
import doctorModel from "../models/DoctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/AppointmentModel.js";
import userModel from "../models/UserModel.js";
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;
    // console.log(
    //   {
    //     name,
    //     email,
    //     password,
    //     speciality,
    //     degree,
    //     experience,
    //     about,
    //     fees,
    //     address,
    //   },
    //   imageFile
    // );
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "missing details" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "enter a strong password(min length 8)",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //upload image to cloudinary
    const imageUpload = await cloundinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    return res.json({
      success: true,
      message: "doctor added successfully",
      doctor: newDoctor,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

//contorller for admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

//contorller for getting all the doctors
const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password"); // get all detail of doctors excluding password
    if (!doctors) {
      return res.json({ success: false, message: "No doctor found" });
    }
    return res.json({ success: true, doctors: doctors });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

//api to get all appointments list
const appointmentsAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    if (!appointments) {
      return res.json({ success: false, message: "No appointments found" });
    }
    return res.json({
      success: true,
      message: "Appointments fetched successfully",
      appointments: appointments,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

//api for appointment cancellation by admin
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });
    //releasing the doctors slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);
    let slots_booked = doctorData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );
    await doctorModel.findByIdAndUpdate(docId, { slots_booked: slots_booked });

    return res.json({ success: true, message: "Appointment cancelled" });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

//api to get dashboard data for admin dashboard
const adminDashboard = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const users = await userModel.find({});
    const appointments = await appointmentModel.find({});
    const dashData = {
      doctors: doctors.length,
      appointments: appointments.length,
      patients: users.length,
      latestAppointments: appointments.reverse().slice(0, 5),
    };
    return res.json({ success: true, dashData: dashData });
  } catch (error) {
    console.log(error.message);
    return res.json({ succcess: false, message: error.message });
  }
};
export {
  addDoctor,
  loginAdmin,
  allDoctors,
  appointmentsAdmin,
  appointmentCancel,
  adminDashboard,
};
