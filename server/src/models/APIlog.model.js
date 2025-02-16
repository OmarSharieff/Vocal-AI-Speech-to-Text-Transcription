import mongoose from "mongoose"

const ApiLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  requestType: { type: String, required: true }, // "transcription"
  status: { type: String, enum: ["success", "failed"], required: true },
  errorMessage: { type: String, required: false }, // Error details if failed
  createdAt: { type: Date, default: Date.now }
});

export const ApiLog = mongoose.model("ApiLog", ApiLogSchema)