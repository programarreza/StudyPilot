import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("connect to mongodb");
  } catch (error) {
    console.log("Error connection to MongoDB:", error);
  }
};
export default connectMongoDB;
