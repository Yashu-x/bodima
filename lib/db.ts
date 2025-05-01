import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

//  MongoDB URI check
const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// ========== Mongoose Setup ==========
let mongooseCached = (global as any).mongoose as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

if (!mongooseCached) {
  mongooseCached = (global as any).mongoose = { conn: null, promise: null };
}

export const dbConnect = async () => {
  if (mongooseCached.conn) return mongooseCached.conn;

  if (!mongooseCached.promise) {
    mongooseCached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
       autoIndex: true 
    });
  }

  try {
    mongooseCached.conn = await mongooseCached.promise;
    console.log(" Mongoose connected");
    return mongooseCached.conn;
  } catch (err) {
    mongooseCached.promise = null;
    console.error(" Mongoose connection error:", err);
    throw err;
  }
};

// ==========  MongoClient Setup (for NextAuth, etc.) ==========
const mongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let mongoClient: MongoClient;

if (process.env.NODE_ENV === "development") {
  let globalWithMongoClient = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongoClient._mongoClient) {
    globalWithMongoClient._mongoClient = new MongoClient(MONGODB_URI, mongoClientOptions);
  }

  mongoClient = globalWithMongoClient._mongoClient;
} else {
  mongoClient = new MongoClient(MONGODB_URI, mongoClientOptions);
}

export const clientPromise = mongoClient.connect();
