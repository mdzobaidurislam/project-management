// db.js

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/project_manage", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
