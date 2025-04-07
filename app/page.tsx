"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import ListingCard from "@/app/components/ListingCard";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface Listing {
  _id: string;
  name: string;
  price: number;
  mainImage: string;
  address: string;
  gender: string;
  roomCapacity: number;
  mobileNumber: string;
}

export default function HomePage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  
  // Use the NextAuth hook to get session data on the client side
  const { data: session } = useSession();

  // Search and Filter States
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState({
    gender: "all",
    roomCapacity: "all",
    priceRange: "all"
  });

  const fetchListings = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();

      // Handle search
      if (searchValue) {
        params.set("search", searchValue);
      }

      // Apply filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== "all") params.set(key, value);
      });

      const response = await fetch(`/api/listings?${params.toString()}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const result = await response.json();
      setListings(result);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError("Failed to fetch listings. Please try again later.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, filters]);

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Bodima Accommodations</CardTitle>
              <CardDescription>
                Find your perfect boarding place in Sri Lanka
              </CardDescription>
            </div>
            <div className="flex gap-4">
              <button
                onClick={fetchListings}
                className="flex items-center text-sm hover:text-primary transition-colors"
                disabled={loading}
              >
                <ReloadIcon className={`mr-1 h-4 w-4 ${loading && "animate-spin"}`} />
                Refresh
              </button>
              <Link 
                href="/admin" 
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
              >
                Admin Dashboard
              </Link>
            </div>
          </div>

          {/* Session Handling */}
          <div className="mt-4 flex justify-end">
            {session ? (
              <div className="flex items-center gap-4">
                {session.user?.image ? (
                  <img
                    src={session.user.image || "/placeholder.svg"}
                    alt={session.user.name || "User"}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 p-1 bg-gray-100 rounded-full" />
                )}
                <Button variant="outline" size="sm" onClick={() => signOut()}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </Button>
              </div>
            ) : (
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                Login
              </Link>
            )}
          </div>

          {/* Search Section */}
          <div className="mt-4">
            <Input
              placeholder="Search by name or location..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Filter Section */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Select
              value={filters.gender}
              onValueChange={(v) => handleFilterChange("gender", v)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Gender Preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genders</SelectItem>
                <SelectItem value="male">Male Only</SelectItem>
                <SelectItem value="female">Female Only</SelectItem>
                <SelectItem value="both">Both Genders</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.roomCapacity}
              onValueChange={(v) => handleFilterChange("roomCapacity", v)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Room Capacity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Capacity</SelectItem>
                <SelectItem value="1">Single Room</SelectItem>
                <SelectItem value="2">Double Room</SelectItem>
                <SelectItem value="3">Triple Room</SelectItem>
                <SelectItem value="4">Quad Room</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.priceRange}
              onValueChange={(v) => handleFilterChange("priceRange", v)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Price</SelectItem>
                <SelectItem value="0-10000">Under Rs. 10,000</SelectItem>
                <SelectItem value="10000-20000">Rs. 10,000 - 20,000</SelectItem>
                <SelectItem value="20000-30000">Rs. 20,000 - 30,000</SelectItem>
                <SelectItem value="30000+">Above Rs. 30,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="grid">
            <TabsList className="mb-4">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>

            <TabsContent value="grid">
              {error ? (
                <div className="text-destructive p-4 rounded-md bg-destructive/10">
                  {error}
                </div>
              ) : loading ? (
                <div className="flex justify-center items-center h-64">
                  <ReloadIcon className="h-8 w-8 animate-spin" />
                </div>
              ) : listings.length === 0 ? (
                <div className="text-center py-8">
                  <p>No listings found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.map((listing) => (
                    <ListingCard key={listing._id} listing={listing} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="map">
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <p>Map view coming soon</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
