import { connectDB } from '@/lib/db';
import Listing from '@/models/Property';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const listings = await Listing.find().sort({ createdAt: -1 });
    return NextResponse.json(listings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const newListing = await Listing.create(body);
    return NextResponse.json(newListing, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    );
  }
}