import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const clases =  mongoose.model("Class", classSchema);
export default clases;
