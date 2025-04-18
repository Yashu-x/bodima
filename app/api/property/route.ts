import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import properties from "@/models/property";

type Params = Promise<{ longitude: number; latitude: number }>;
export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    await dbConnect();
  } catch (err) {
    console.error("DB connection failed:", err);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }

  try {
    const { longitude, latitude } = await params;
    console.log("Fetching properties near:", longitude, latitude);
    if (longitude == 0 || latitude == 0) {
      return NextResponse.json(
        { error: "Longitude and latitude are required" },
        { status: 400 }
      );
    }

    const nearProperties = await properties
      .find({
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
            $maxDistance: 1000, 
          },
        },
      })
      .limit(10)
      .exec();
    if (!nearProperties) {
      return NextResponse.json(
        { error: "No properties found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ nearProperties }, { status: 200 });
  } catch (error) {
    console.error("Error fetching propertyDetails :", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
