import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  stream: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stream",
    
  },
  subject:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    
  }],
},{
    timestamps: true,
});


const Student=mongoose.model("Student",StudentSchema)

export default Student;