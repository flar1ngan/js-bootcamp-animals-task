import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB!");
  } catch (error) {
    console.error(error);
  }
};

export default connectionToMongo;
