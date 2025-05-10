import { NextResponse } from "next/server";
import properties from "@/models/property";
import { dbConnect } from "@/lib/db";
import { SearchPropertySchema } from "@/validateSchemas/searchPropertySchema";
import geocodeLocation from "@/lib/geocode";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const validation = SearchPropertySchema.safeParse({
    area: searchParams.get("area"),
    minFee: searchParams.get("minFee"),
    maxFee: searchParams.get("maxFee"),
    type: searchParams.get("type"),
    pageNo: searchParams.get("pageNo"),
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await dbConnect();
  } catch (err) {
    console.error("DB connection failed:", err);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }

  const { area, minFee, maxFee, type, pageNo } = validation.data;

  try {
    // Geocoding and database logic
    const { longitude, latitude } = await geocodeLocation(area!);
    console.log("Coordinates:", longitude, latitude);
    console.log("Area:", area);

    const addsPerPage = 6;
    const skipCount = (pageNo - 1) * addsPerPage;

    const nearProperties = await properties
      .find({
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
            $maxDistance: 50000,
          },
        },
        adState: "Active",
        Fee: { $gte: minFee, $lte: maxFee },
        occupantType: type,
      })
      .skip(skipCount)
      .limit(addsPerPage)
      .exec();

    const totalPropertiesCount = await properties.countDocuments({
      location: {
        $geoWithin: {
          $centerSphere: [[longitude, latitude], 500000 / 6378137], // radius in radians
        },
      },
    });

    const totalPages = Math.ceil(totalPropertiesCount / addsPerPage);

    if (!nearProperties) {
      return NextResponse.json(
        { error: "No properties found" },
        { status: 404 }
      );
    }
    const responseObject = nearProperties.map((property) => ({
      id: property._id,
      title: property.title,
      fee: property.Fee,
      address: property.Address,
      mainImage: property.mainImage,
      isUtitilityIncluded: property.isUtitilityIncluded,
      keyMoney: property.keyMoney,
      occupantType: property.occupantType,
      paymentMethod: property.paymentMethod,
      longitude: property.location.coordinates[0],
      latitude: property.location.coordinates[1],
      pageCount: totalPages,
    }));
    return NextResponse.json(
      { properties: responseObject, totalPages: totalPages },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching propertyDetails :", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
