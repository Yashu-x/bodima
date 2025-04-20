"use client";

import Hero from "./components/Home/Hero";
import ListingSection from "./components/Home/ListingSection";

export default function HomePage() {
  
  return (
    <div>
      <div className="h-auto md:h-screen">
        <Hero />
      </div>
      <div>
        <ListingSection />
      </div>
    </div>
  );
}
