"use client";
import Hero from "../components/Home/Hero";
import ListingSection from "../components/Home/ListingSection";
import { SearchParams } from "../components/Home/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getNearPropertiesByLongitudeLatitude } from "@/lib/queryOptions";
import ListingSectionSkeleton from "../components/Home/ListingSectionSkeleton";


export default function HomePage() {

  const handleSearch = async ({ type, range, area }: SearchParams) => {
    console.log("Search params:", { type, range, area });
  }

  const {isPending,isError, data, error } = useQuery(
    getNearPropertiesByLongitudeLatitude("79", "6", "1")
  );

  
  return (
    <div>
      <div className="h-auto md:h-screen">
        <Hero onSearch={handleSearch} />
      </div>
      <div>
        {isPending ? (
          <ListingSectionSkeleton/>
        ) : isError ? (
          <h1 className="text-2xl font-bold">Error</h1>
        ) : (
          <ListingSection listings={data?.properties || []} />
        )}
      </div>
    </div>
  );
}
