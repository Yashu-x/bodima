import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const ListingSectionSkeleton = () => {
  return (
    <section className=" bg-gradient-to-br from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Explore Our Latest Listing
        </h2>
        <p className="text-black mb-10">
          Explore Featured properties for rent
        </p>
        </div>
        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-96 w-90 rounded-xl bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingSectionSkeleton;
