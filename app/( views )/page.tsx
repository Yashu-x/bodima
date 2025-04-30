"use client";

import { useState } from "react";
import Hero from "../components/Home/Hero";
import ListingSection from "../components/Home/ListingSection";
import { SearchParams } from "../components/Home/SearchBar";


export default function HomePage() {

  const [results, setResults] = useState<any[]>([])

  const handleSearch = async ({ type, range, area }: SearchParams) => {
    console.log("Search params:", { type, range, area });
  }
  
  return (
    <div>
      <div className="h-auto md:h-screen">
        <Hero onSearch={handleSearch} />
      </div>
      <div>
        <ListingSection />
      </div>
    </div>
  );
}
