//Add all the apis in here
// for TypeScript safety add retun type to the function

import { ListingCardProps } from "@/app/components/Home/ListingSection";
import { PropertySchema } from "@/validateSchemas/propertySchema";
import { z } from "zod";

type propertyData = z.infer<typeof PropertySchema>;

export const createPost = async (data: propertyData, uid: string) => {
  const response = await fetch("/api/property/user" + uid, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getPropertiesByUserID = async (uid: string) => {
  const response = await fetch("/api/property/user" + uid);
  return response.json();
};

export const getPropertiesByPropertyID = async (
  propertyId: string
):Promise<getPropertiesByPropertyID> => {
  const response = await fetch("/api/property/" + propertyId);
  return response.json();
}

type getPropertiesByPropertyID={
  id:string,
  title:string,
  fee:number,
  address:string,
  mainImage:string,
  isUtitilityIncluded:boolean,
  keyMoney:number,
  occupantType:string,
  paymentMethod:string,
  propertyType:string,
  description:string,
  specificLocation:string,
  nearestTown:string,
  contactNumber:string,
}

export const deleteProperty = async (uid: string, propertyId: string) => {
  const response = await fetch("/api/property/user" + uid, {
    method: "DELETE",
    body: JSON.stringify({ propertyId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const updateProperty = async (
  uid: string,
  propertyId: string,
  updateData: propertyData
) => {
  const response = await fetch("/api/property/user" + uid, {
    method: "PUT",
    body: JSON.stringify({ propertyId, updateData }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getNearProperties = async (
  longitude: string,
  latitude: string,
  pageNo: string
):Promise<getNearProperties> => {
  const response = await fetch(`/api/property/location/${longitude}/${latitude}/${pageNo}`);
  return response.json();
};

type getNearProperties={
  properties:ListingCardProps[],
  totalPages:number,
}