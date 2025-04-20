import React from "react";
import { Badge } from "@/components/ui/badge";

import {PersonStanding} from "lucide-react"
import { MapPin } from 'lucide-react';

interface ListingCardProps {
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

const BilsAndKeyMoneyStates = (bill:Boolean,keyMoney:Boolean) =>{
    let states = ""
    if(bill){
        states = states + "*Utility bills not included."
    }else{
        states = states + "*Utility bills included."
    }
    if(keyMoney){
        states = states + " | Key money required"
    }else{
        states = states + " | No key money required"
    }
    return states 
}

const ImgURLChecker = (url: string) => {
  if(url == "" || url == null || url == undefined || url == " "){
    url = "https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__";
  }
  return url
}

const whos =  [
                {'Anyone':<PersonStanding/>},
                {'A Couple':<PersonStanding/>},
                {'A Family':<PersonStanding/>},
                {'Female Job Holders':<PersonStanding/>},
                {'Female Only':<PersonStanding/>},
                {'Female Student':<PersonStanding/>},
                {'Male Job Holders':<PersonStanding/>},
                {'Male Only':<PersonStanding/>},
                {'Male Student':<PersonStanding/>},
              ]

const BadgeIconSelecter = (key: string) => {
  const selectedIcon = whos.find((item) => item.hasOwnProperty(key));
  return selectedIcon ? Object.values(selectedIcon)[0] : null;
}

const ListingCard: React.FC<ListingCardProps> = ({
    id,
    imageURL,
    ForWho,
    name,
    address,
    price,
    paymentType,
    keyMoneyStates,
    utilityIncluded,
    tags
}) => {
  return (
    <div className="max-w-90 rounded-xl overflow-hidden shadow-lg bg-white border pb-4" onClick={() => console.log(id)}>
      <div className="center relative p-4 pl-4">
        <img
          className="w-80 h-60 object-cover rounded-[8px]"
          src={ImgURLChecker(imageURL)}
          alt={name}
        />
        <Badge className="absolute top-7 right-9 bg-blue-100 text-black text-sm px-2 py-1 rounded-full flex items-center gap-1 max-w-28 max-h-7" >
          <span>{BadgeIconSelecter(ForWho)}</span> {ForWho}
        </Badge>
      </div>
      <div className="px-4">
        <h2 className="font-bold text-2xl text-black">{name}</h2>
        <p className="flex text-sm text-black/60 gap-1"><MapPin className="text-primary/60"/>{address}</p>

        <div className="flex flex-wrap mt-3 text-center text-sm text-gray-700 gap-0 pl-3 md:gap-8 sm:gap-8">
          {tags.map((tag,i) => (
            <div
            key={i}
            className="flex flex-col items-center bg-gray-100 px-3 py-2 rounded-md w-20"
            >
                <span className="text-lg">🛏</span>
                <span>{tag.value} {tag.key}</span>    
            </div>
          ))}
        </div>

        <div className="mt-4">
          <span className="text-primary text-2xl font-bold">
            LKR. {price.toLocaleString()}/{paymentType}
          </span>
          <p className="text-xs text-black/60 mt-1">
            {BilsAndKeyMoneyStates(utilityIncluded,keyMoneyStates)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
