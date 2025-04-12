import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import properties from "@/models/property";
import { PropertySchema } from "@/validateSchemas/propertySchema";
import { getCurrentUser } from "@/lib/auth";
import { z } from "zod";
import { Types } from "mongoose";

type propertyData = z.infer<typeof PropertySchema>;
type Params = Promise<{ uid: string }>;
const RequestBodySchema = z.object({
    propertyId: z.string(),
    updateData: PropertySchema.partial(),
});

export async function POST(request: NextRequest,
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
  //const user = await getCurrentUser();
  const { uid } = await params;

if (!uid) {
    return NextResponse.json({ error: "UID is required" }, { status: 400 });
}
//   if (!user)
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body: propertyData = await request.json();
  console.log("Request Body:", body);

  const validation = PropertySchema.safeParse(body);
  
  if (!validation.success) {
    console.error("Validation Errors:", validation.error);
    return NextResponse.json(
      { error: validation.error.flatten() },
      { status: 400 }
    );
  }


  const property = await properties.create({
    ...validation.data,
    ownerId: uid,
  });


  return NextResponse.json(property, { status: 201 });
}



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
    const { uid } = await params;
  
    console.log("Fetching userID:", uid);
    try {
    const propertyByUserID: propertyData[] = await properties.find(
      { ownerId: uid });
  
      return NextResponse.json(propertyByUserID, { status: 200 });
    } catch (error) {
      console.error("Error fetching propertyDetails :", error);
  
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }


  export async function DELETE(
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
    const { uid } = await params;
  
    console.log("Fetching userID:", uid);
    try {
        const {propertyId} = await request.json();
        console.log("Fetching propertyID:", propertyId);

        if (!Types.ObjectId.isValid(propertyId)) {
            return NextResponse.json(
                { error: "Invalid property ID format" },
                { status: 400 }
            );
        }


    const deletedProperty = await properties.deleteOne(
        { _id:propertyId, ownerId: uid }   );
    
    if (deletedProperty.deletedCount === 0) {
        return NextResponse.json(
            { error: "Property not found or already deleted" },
            { status: 404 }
        );
    }
    console.log("Deleted Property:", deletedProperty);

    return NextResponse.json(
        { message: "Properties deleted successfully", deletedCount: deletedProperty.deletedCount },
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


  export async function PUT(
    request: NextRequest,
    { params }: { params: { uid: string } }
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

    const { uid } = params;
    console.log("Fetching userID:", uid);

    try {
        const updatedData = await request.json();
        const validation = RequestBodySchema.safeParse(updatedData);

        if (!validation.success) {
            console.error("Validation Errors:", validation.error);
            return NextResponse.json(
                { error: validation.error },
                { status: 400 }
            );
        }

        const { propertyId, updateData } = validation.data;

        
        if (!Types.ObjectId.isValid(propertyId)) {
            return NextResponse.json(
                { error: "Invalid property ID format" },
                { status: 400 }
            );
        }

        console.log("Fetching propertyID:", propertyId);
        console.log("Update Data:", updateData);

        const updatedProperty = await properties.findOneAndUpdate(
            { _id: propertyId, ownerId: uid },
            { $set: updateData },
            { new: true }
        );

        if (!updatedProperty) {
            return NextResponse.json(
                { error: "Property not found or not owned by user" },
                { status: 404 }
            );
        }

        console.log("Updated Property:", updatedProperty);

        return NextResponse.json(updatedProperty, { status: 200 });
    } catch (error) {
        console.error("Error updating property:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

