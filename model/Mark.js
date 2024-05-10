// marks Schema
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MarkSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  stream: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stream",
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  marks: { type: Number, required: true },
});

const Mark = mongoose.model("Mark", MarkSchema);
export default Mark;
