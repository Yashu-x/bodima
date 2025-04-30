import React from "react";

type PropertyDetail = {
  key: string;
  value: string;
};

type PropertyDetailsProps = {
  details: PropertyDetail[];
  description: string;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ details, description }) => {
  // Split the details array in half for two columns
  const midIndex = Math.ceil(details.length / 2);
  const leftDetails = details.slice(0, midIndex);
  const rightDetails = details.slice(midIndex);

  return (
    <div className="bg-gray-100 shadow p-6 rounded-md space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Property Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[leftDetails, rightDetails].map((group, idx) => (
            <div key={idx} className="space-y-2">
              {group.map((item, i) => (
                <div key={i} className="flex">
                  <span className="font-medium w-40">{item.key} :</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="whitespace-pre-line text-justify text-justify-auto">{description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;