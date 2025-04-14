import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    title: { type: String, required: true },
    ownerId: { type: String, required: true },

    mainImage: { type: String },
    subImages: [{ type: String }],

    Fee: { type: Number, required: true },
    keyMoney: { type: Number, required: true },
    isUtitilityIncluded: { type: Boolean, default: false },
    paymentMethod: {
      type: String,
      enum: ["monthly", "yearly","Every 3 months"],
      required: true,
    },

    occupantType: {
      type: String,
      enum: [
        " Anyone",
        " A Couple",
        " A Family",
        " Female Job Holders",
        " Female Only",
        " Female Student",
        " Male Job Holders",
        " Male Only",
        " Male Student",
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
    langitude: { type: String },
    latitude: { type: String },

    tags: [
      {
        type: String,
        enum: ["Parking", "attached Bathroom", "Kitchen", "AC"],
      },
    ],

    contactNumber: { type: String },

    adState: {
      type: String,
      enum: ["Active", "Pending", "Cancel"],
      default: "pending",
    },
    options: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Property ||
  mongoose.model("properties", propertySchema);
