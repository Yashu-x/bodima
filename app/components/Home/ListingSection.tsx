import React from 'react';
import ListingCard from './ListingCard';

export interface ListingCardProps {
    id: string;
    imageURL: string;
    ForWho: string;
    name: string;
    address: string;
    price: number;
    paymentType: string;
    keyMoneyStates: Boolean;
    utilityIncluded: Boolean;
    tags: { key: string; value: string }[];
}

interface ListingSectionProps {
  listings: ListingCardProps[];
}

const ListingSection: React.FC<ListingSectionProps> = ({ listings }) => {
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
          {listings.map((place,id) => (
                <ListingCard
                    key={id}
                    id={place.id}
                    imageURL={place.imageURL}
                    ForWho={place.ForWho}
                    name={place.name}
                    address={place.address}
                    price={place.price}
                    paymentType={place.paymentType}
                    keyMoneyStates={place.keyMoneyStates}
                    utilityIncluded={place.utilityIncluded}
                    tags={place.tags}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ListingSection;
