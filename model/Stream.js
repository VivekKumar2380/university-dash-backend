// Stream Schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StreamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    subject: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Stream = mongoose.model("Stream", StreamSchema);

export default Stream;
