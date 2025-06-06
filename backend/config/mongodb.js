import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () => console.log("Connected to DB"));
  await mongoose.connect(`${process.env.MONGODB_URI}QuickCare`);
};
export default connectDb;
