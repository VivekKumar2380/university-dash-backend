// Subject Schema
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubjectSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Subject = mongoose.model("Subject", SubjectSchema);

export default Subject;
