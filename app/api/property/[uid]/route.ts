import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import properties from "@/models/property";
import { PropertySchema } from "@/validateSchemas/propertySchema";
import { getCurrentUser } from "@/lib/auth";
import { z } from "zod";

type propertyData = z.infer<typeof PropertySchema>;
type Params = Promise<{ uid: string }>;

export async function POST(request: NextRequest,
    { params }: { params: Params }
) {
  await dbConnect();

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
    await dbConnect();
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
