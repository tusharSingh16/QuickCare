import doctorModel from "../models/DoctorModel.js";

//since we need this changeAvailability functionality on both admin and doctor dashboard so we are creating it here
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availablity changed" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password -email"); //exclude password and email in response
    res.json({ success: true, doctors: doctors });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
export { changeAvailability, doctorList };
