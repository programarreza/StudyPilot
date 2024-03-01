const { Schema, models, model } = require("mongoose");

const assignmentScema = new Schema({
    email:{type:String,required:true},
    classId:{type:String,required:true},
    title:{type:String,required:true},
    deadline:{type:String,required:true},
    description:{type:String,required:true}
})

const Assignment = models.Assignment || model("Assignment",assignmentScema)
export default Assignment