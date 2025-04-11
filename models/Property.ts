import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    title: { type: String, required: true },
    ownerId: { type: String, required: true },

    mainImage: { type: String },
    subImages: [{ type: String }],

    price: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["monthly", "yearly"],
      required: true,
    },

    occupantType: {
      type: String,
      enum: [
        "For Anyone",
        "For a Couple",
        "For a Family",
        "For Female Job Holders",
        "For Female Only",
        "For Female Student",
        "For Male Job Holders",
        "For Male Only",
        "For Male Student",
      ],
      required: true,
    },

    propertyType: {
      type: String,
      enum: ["apartment", "house", "shared room", "single room"],
      required: true,
    },

    location: { type: String, required: true },
    specificLocation: { type: String },
    nearestTown: { type: String },

    tags: [
      {
        type: String,
        enum: ["Parking", "attached Bathroom", "Kitchen", "AC"],
      },
    ],

    contactNumber: { type: String },

    adState: {
      type: String,
      enum: ["active", "pending", "cancel"],
      default: "pending",
    },
    options: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Property ||
  mongoose.model("Property", propertySchema);
