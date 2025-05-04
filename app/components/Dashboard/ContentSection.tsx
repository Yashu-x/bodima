import Dashboard from "@/app/( views )/dashboard/page";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import DashboardListingCard from "./DashboardListingCard";

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

type ContentSectionProps = {
  data: DashboardListingCardProps[];
};

function ContentSection({ data }: ContentSectionProps)  {
  return (
    <div className="flex justify-center mt-4 px-4">
      <Card className="w-full max-w-7xl bg-gray-50">
        <CardContent className="py-6">
          <div className="text-sm font-semibold text-black">My Ads &gt;</div>
          <div className="flex flex-col items-center mt-4">
            {data.map((item, index) => (
              <div className="flex w-full max-w-3xl mb-4" key={index}>
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-gray-700 font-semibold mr-4 text-center">
                  {index + 1}
                </div>
                <div>
                  <DashboardListingCard 
                    key={index}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    toWho={item.toWho}
                    details={item.details}
                    address={item.address}
                    price={item.price}
                    paymentMethod={item.paymentMethod}
                    id={item.id}
                    views={item.views}
                    createdDate={item.createdDate}
                    onDelete={item.onDelete}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContentSection;
