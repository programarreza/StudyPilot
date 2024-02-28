const { Schema, models, model } = require("mongoose");

const enrolledClassSchema = new Schema({
    email:{
        type:String,
        required:true
    },
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
})

 const EnrolledClass = models.EnrolledClass || model("EnrolledClass",enrolledClassSchema)
export default EnrolledClass