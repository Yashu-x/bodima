import Link from 'next/link';

export default function ListingCard({ listing }: { listing: any }) {
  return (
    <Link href={`/listing/${listing._id}`}>
      <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
        <img src={listing.mainImage} alt={listing.name} className="w-full h-48 object-cover rounded-xl" />
        <h2 className="text-xl font-semibold mt-2">{listing.name}</h2>
        <p className="text-lg font-medium text-green-600">Rs. {listing.price}</p>
      </div>
    </Link>
  );
}
