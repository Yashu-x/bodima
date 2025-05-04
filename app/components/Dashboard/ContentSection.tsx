import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function ContentSection() {
  return (
    <div className="flex justify-center mt-4 px-4">
      <Card className="w-full max-w-4xl bg-gray-50">
        <CardContent className="py-6">
          <div className="text-sm font-semibold text-black">My Ads &gt;</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContentSection;
