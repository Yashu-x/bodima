import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import properties from "@/models/property";
import user from "@/models/user";
import { PropertySchema } from "@/validateSchemas/propertySchema";
import { getCurrentUser } from "@/lib/auth";
import { z } from "zod";
import { Types } from "mongoose";

type propertyData = z.infer<typeof PropertySchema>;
type Params = { propertyid: string };



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

    const { propertyid } = params;

    console.log("Fetching propertyID:", propertyid);
    try {
        if (!propertyid) {
            return NextResponse.json(
                { error: "propertyid is required" },
                { status: 400 }
            );
        }

        const propertyByID = await properties.findById({ _id: propertyid });
        if (!propertyByID) {
            return NextResponse.json(
                { message: "No properties found" },
                { status: 404 }
            );
        }

        
        const responseObject = {
            id: propertyid,
            title: propertyByID.title,
            fee: propertyByID.Fee,
            address: propertyByID.Address,
            mainImage: propertyByID.mainImage,
            subImages: propertyByID.subImages,
            isUtitilityIncluded: propertyByID.isUtitilityIncluded,
            keyMoney: propertyByID.keyMoney,
            occupantType: propertyByID.occupantType,
            paymentMethod: propertyByID.paymentMethod,
            propertyType: propertyByID.propertyType,
            description: propertyByID.description,
            specificLocation: propertyByID.specificLocation,
            nearestTown: propertyByID.nearestTown,
            tags: propertyByID.tags,
            contactNumber: propertyByID.contactNumber,
            adState: propertyByID.adState,
            options: propertyByID.options
        };

        return NextResponse.json(responseObject, { status: 200 });
    } catch (error) {
        console.error("Error fetching propertyDetails:", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}