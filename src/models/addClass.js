import { model, models, Schema } from "mongoose";

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

const Clases = models.Clases || model("Clases", classSchema);
export default Clases; 
