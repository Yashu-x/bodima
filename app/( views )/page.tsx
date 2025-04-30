"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import ListingSection from "../components/Home/ListingSection";
import { SearchParams } from "../components/Home/SearchBar";
import { set } from "mongoose";


export default function HomePage() {

  const [results, setResults] = useState<any[]>([])

  const handleSearch = async ({ type, range, area }: SearchParams) => {
    console.log("Search params:", { type, range, area });
  }
  
  // delete this part after set api calls
  useEffect(() => {
    setResults([
      {
        id: "1",
        imageURL: " ",
        ForWho: "Students",
        name: "Cozy Room in Nugegoda",
        address: "123 Main St, Nugegoda",
        price: 15000,
        paymentType: "Monthly",
        keyMoneyStates: true,
        utilityIncluded: true,
        tags: [
          { key: "Rooms", value: "2" },
          { key: "Baths", value: "1" },
          { key: "Parking", value: "Yes" },
        ],
      },
    ]);
  }, []);

  return (
    <div>
      <div className="h-auto md:h-screen">
        <Hero onSearch={handleSearch} />
      </div>
      <div>
        <ListingSection listings={results} />
      </div>
    </div>
  );
}
