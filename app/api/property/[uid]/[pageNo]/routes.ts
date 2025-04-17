import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import properties from "@/models/property";
import { PropertySchema } from "@/validateSchemas/propertySchema";
import { getCurrentUser } from "@/lib/auth";
import { z } from "zod";
import { Types } from "mongoose";

type ParamsWithPageNo = Promise<{ uid: string, pageNo: string }>;
type propertyData = z.infer<typeof PropertySchema>;
export async function GET(
    request: NextRequest,
    { params }: { params: ParamsWithPageNo }
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
    const {pageNo}=await params;
  
    console.log("Fetching userID:", uid);
    try {
        if (!uid) {
            return NextResponse.json({ error: "UID is required" }, { status: 400 });
        }
        if (!pageNo) {
            return NextResponse.json({ error: "Page number is required" }, { status: 400 });
        }
        
        const totalPropertiesCount = await properties.countDocuments({ ownerId: uid });
        const addsPerPage = 6;
        const skipCount = (parseInt(pageNo) - 1) * addsPerPage;

        const propertyByUserID: propertyData[] = await properties
            .find({ ownerId: uid })
            .skip(skipCount)
            .limit(addsPerPage);

        const totalPages = Math.ceil(totalPropertiesCount / addsPerPage);

        return NextResponse.json(
            { properties: propertyByUserID, totalPages, currentPage: parseInt(pageNo) },
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
