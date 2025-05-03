"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import ListingSection from "../components/Home/ListingSection";
import { SearchParams } from "../components/Home/SearchBar";
import { set } from "mongoose";
import { useQuery } from "@tanstack/react-query";
import { getNearPropertiesByLongitudeLatitude } from "@/lib/queryOptions";


export default function HomePage() {

  const handleSearch = async ({ type, range, area }: SearchParams) => {
    console.log("Search params:", { type, range, area });
  }

  const { isPending, isError, data, error } = useQuery(
    getNearPropertiesByLongitudeLatitude("79", "6", "1")
  );

  if(isPending){
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if(isError){
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Error</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="h-auto md:h-screen">
        <Hero onSearch={handleSearch} />
      </div>
      <div>
        <ListingSection listings={data?.properties || []} />
      </div>
    </div>
  );
}
