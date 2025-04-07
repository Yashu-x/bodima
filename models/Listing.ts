import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  name: String,
  price: Number,
  status: { 
    type: String, 
    enum: ["active", "pending"], 
    default: "pending" 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
  },
  // ... other fields you have ...
}, { timestamps: true });

export default mongoose.models.Listing || mongoose.model("Listing", ListingSchema);