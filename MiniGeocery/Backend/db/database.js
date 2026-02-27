import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.db_url);
    console.log("database connected Successfully!!");
  } catch {
    console.log("Something went Wrong");
  }
};

export default connectDB;
