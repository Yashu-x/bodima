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
import { useDebounce } from "use-debounce";


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
  const [debouncedSearch] = useDebounce(searchValue, 500);
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
  }, [debouncedSearch, filters]);

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
    </div>
  );
}
