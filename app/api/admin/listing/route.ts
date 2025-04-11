import { connectDB } from "@/lib/db";
import Listing from "@/models/Property";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  
  try {
    const listings = await Listing.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $unwind: "$user"
      },
      {
        $project: {
          name: 1,
          price: 1,
          status: 1,
          createdAt: 1,
          "postedBy.name": "$user.name",
          "postedBy.email": "$user.email"
        }
      },
      { $sort: { createdAt: -1 } }
    ]);

    return NextResponse.json(listings);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}