// components/Home/SearchBar.tsx
import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export type SearchParams = {
  type: string;
  range: [number, number];
  area: string;
};

interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [type, setType] = useState<string>("Boarding");
  const [range, setRange] = useState<[number, number]>([0, 10000]);
  const [area, setArea] = useState<string>("Nugegoda");

  const types = ["Boarding", "Rental", "Shared"];

  const handleAreaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value);
  };

  const handleClick = () => {
    onSearch({ type, range, area });
  };

  return (
    <div className="max-w-5xl mx-auto mt-6 p-4 md:p-6 rounded-xl border-l-2 border-r-2 border-t-2 border-b-6 border-primary bg-background shadow-sm flex flex-col gap-6 md:gap-4 md:flex-row items-stretch md:items-center">
      {/* Type of stay */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="font-semibold mb-1">Type of stay</label>
        <Select onValueChange={setType} defaultValue={type}>
          <SelectTrigger className="p-2 w-full">
            <SelectValue placeholder="Type of stay" />
          </SelectTrigger>
          <SelectContent>
            {types.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm text-gray-400 mt-1 pl-1">
          Select what you're looking for
        </span>
      </div>

      {/* Monthly Budget */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="font-semibold mb-1">Monthly Budget</label>
        <Slider
          defaultValue={range}
          value={range}
          onValueChange={(val: [number, number]) => setRange(val)}
          min={0}
          max={10000}
          step={100}
          className="pt-4 pb-4"
        />
        <span className="text-sm text-gray-500 mt-1">
          Rs.{range[0]} - {range[1]}
        </span>
      </div>

      {/* Area */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="font-semibold mb-1">Area</label>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            value={area}
            onChange={handleAreaChange}
            className="p-2 w-full"
            placeholder="Enter your preferred location"
          />
          <Button
            className="bg-black text-white rounded-md w-full sm:w-auto hover:bg-black/50"
            onClick={handleClick}
          >
            Search Area
          </Button>
        </div>
        <span className="text-sm text-gray-400 mt-1">
          Enter your preferred location
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
