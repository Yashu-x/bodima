import { dbConnect } from "@/lib/db"; 

export const checkDBConnection = async () => {
  try {
    await dbConnect(); 
    console.log(" MongoDB connection successful");
    return { success: true, message: "MongoDB connected successfully" };
  } catch (error) {
    console.error(" MongoDB connection failed", error);
    return { success: false, message: "MongoDB connection failed" };
  }
};
