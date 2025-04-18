//Add all the apis in here
// for TypeScript safety add retun type to the function

import { PropertySchema } from "@/validateSchemas/propertySchema";
import { z } from "zod";

type propertyData = z.infer<typeof PropertySchema>;

export const createPost = async (data: propertyData, uid: string) => {
  const response = await fetch("/api/property/" + uid, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getPropertiesByID = async (uid: string) => {
  const response = await fetch("/api/property/" + uid);
  return response.json();
};

export const deleteProperty = async (uid: string, propertyId: string) => {
  const response = await fetch("/api/property/" + uid, {
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
  const response = await fetch("/api/property/" + uid, {
    method: "PUT",
    body: JSON.stringify({ propertyId, updateData }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getNearProperties = async (
  longitude: number,
  latitude: number
) => {
  const response = await fetch(`/api/property/${longitude}/${latitude}`);
  return response.json();
};
