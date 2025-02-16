import mongoose from "mongoose"

const TranscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }, // Optional for authenticated users
  text: { type: String, required: true }, // Transcribed text
  confidence: { type: Number, required: true }, // Confidence score from STT API
  language: { type: String, required: true }, // Detected language (e.g., "en-US")
  modelUsed: { type: String, required: true }, // Which STT model was used (e.g., "Google", "Whisper")
  createdAt: { type: Date, default: Date.now }
});

export const Transcription = mongoose.model("Transcription", TranscriptionSchema)