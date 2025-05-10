import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    emailVerified: { type: Boolean, default: null },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.User || mongoose.model("users", userSchema);
