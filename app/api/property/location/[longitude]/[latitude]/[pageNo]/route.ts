import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import properties from "@/models/property";

type Params = Promise<{ longitude: string; latitude: string,pageNo: string  }>;
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
    const { longitude, latitude,pageNo } = await params;
    //convert logitude and latitude string to numbers
    const longitudeNum = parseFloat(longitude);
    const latitudeNum = parseFloat(latitude);
    const addsPerPage = 6;
    const skipCount = (parseInt(pageNo) - 1) * addsPerPage;
    console.log("Fetching properties near:", longitudeNum, latitudeNum);
    if (longitudeNum == 0 || latitudeNum == 0) {
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
              coordinates: [longitudeNum, latitudeNum],
            },
            $maxDistance: 5000000, 
          },
        },
      })
      .skip(skipCount)
      .limit(addsPerPage)
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
