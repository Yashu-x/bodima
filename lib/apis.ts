//Add all the apis in here
// for TypeScript safety add retun type to the function

import { PropertySchema } from "@/validateSchemas/propertySchema";
import { z } from "zod";


type propertyData = z.infer<typeof PropertySchema>;
export const getTodosById = async (id:number) =>{
    const response = await fetch("/api/todos/Id="+id)
    return response.json()
}

export const createPost = async (data: propertyData,uid:string) => {
    const response = await fetch("/api/property/"+uid, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
}