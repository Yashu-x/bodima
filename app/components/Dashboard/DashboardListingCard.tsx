import React from "react";

type DashboardListingCardProps = {
  imageUrl: string;
  title: string;
  toWho: string;
  details: { key: string; value: string }[];
  address: string;
  price: string;
  paymentMethod: string;
  id: string;
  views: number;
  createdDate: string;
  onDelete?: (id: string) => void;
};

const DashboardListingCard: React.FC<DashboardListingCardProps> = ({
  imageUrl,
  title,
  toWho,
  details,
  address,
  price,
  paymentMethod,
  id,
  views,
  createdDate,
  onDelete,

}) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-xl p-4 max-w-3xl">
      {/* Image */}
      <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
        <img src={imageUrl} alt="Property" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex-grow px-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Badge + details */}
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-1">
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
            {toWho}
          </span>
          {details.map((item, idx) => (
            <span key={idx}>
              {item.key}: {item.value}
            </span>
          ))}
        </div>

        {/* Address */}
        <p className="text-sm text-gray-500 mt-2">{address}</p>

        {/* Price */}
        <p className="text-orange-600 font-semibold text-md mt-1">
          {price}/{paymentMethod}
        </p>
      </div>

      {/* Meta and actions */}
      <div className="text-sm text-right space-y-2">
        <p>
          <span className="font-medium">Views</span>: {views}
        </p>
        <p>
          <span className="font-medium">Post On</span>: {createdDate}
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-1.5 rounded-md"
          onClick={() => onDelete?.(id)}
        >
          DELETE AD
        </button>
      </div>
    </div>
  );
};

export default DashboardListingCard;