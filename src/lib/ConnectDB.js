import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect MongoDB");
    } catch (error) {
        console.log("DB ERROR:", error.message);
    }
}

export default ConnectDB;