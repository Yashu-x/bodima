import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import Property from "@/models/Property";
import { PropertySchema } from "@/validateSchemas/propertySchema";
import { getCurrentUser } from "@/lib/auth";
import { z } from "zod";

type propertyData = z.infer<typeof PropertySchema>;

export async function POST(request: NextRequest) {
  await dbConnect();

  const user = await getCurrentUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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


  const property = await Property.create({
    ...validation.data,
    ownerId: user.id,
  });


  return NextResponse.json(property, { status: 201 });
}
