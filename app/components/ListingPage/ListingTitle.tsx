import { Eye } from "lucide-react";
import { Share2 } from "lucide-react";
import Link from "next/link";

interface ListingTitleProps {
  title: string;
  postedDate: string;
  location: string;
  views: number;
}

export default function ListingTitle({
  title,
  postedDate,
  location,
  views,
}: ListingTitleProps) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <h1 className="text-3xl font-bold">{title}</h1>
        <button className="text-gray-500 hover:text-gray-700 flex gap-2 items-center">
          <Share2 size={18} />
          <span>Share</span>
        </button>
      </div>
      <div className="flex items-center gap-28">
        <div className="text-sm text-gray-600">
          <p>
            Posted on {postedDate}, {location}.
          </p>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <Eye size={16} />
          <span>{views}Views</span>
        </div>
      </div>
    </div>
  );
}
