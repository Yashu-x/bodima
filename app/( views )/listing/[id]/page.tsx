'use client';
import ImageCarousel from '@/app/components/ListingPage/ImageCarousel';
import ListingTitle from '@/app/components/ListingPage/ListingTitle';
import PropertyDetails from '@/app/components/ListingPage/PropertyDetails';
import UserCard from '@/app/components/ListingPage/UserCard';
import WarningCard from '@/app/components/ListingPage/WarningCard';
import { getPropertiesByPropertyIDQO } from '@/lib/queryOptions';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const images = [
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__',
  // 'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  // 'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  // 'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  // 'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  // 'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  // 'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  // 'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
];

const Property = {
  postedDate: '16 Apr 10:43 am',
  views: 12,
  name: 'Danilka Akarawita',
  mapLocation: {
    lat: 6.856011,
    lng: 79.903737,
  },
}

const propertyInfo = [
  { key: "Property Type", value: "Annexe" },
  { key: "Parking Facility", value: "Thinynw" },
  { key: "For", value: "Couples" },
  { key: "Furniture", value: "Not furnished" },
  { key: "Kitchen Facility", value: "Available" },
];

export default function ListPage() {
  const params = useParams();
  const { id } = params;

  const {isPending,isError, data, error } = useQuery(
    getPropertiesByPropertyIDQO(id as string)
  );
  
  console.log("data", data);

  return (
    <div className='min-h-screen'>
        <ListingTitle title={data?.title||""} postedDate={"meka danilkagen illa gannaoni created time"} location={data?.address||""} views={Property.views/*mekata model aka edit karanna wenaw  */} />
        <div className="w-full flex flex-col md:flex-row">
          <ImageCarousel images={images} />
          <div className="flex flex-col md:w-xl bg-white md:pl-4 sm:pl-4 md:gap-2 sm:gap-2 gap-4 md:pt-0 sm:pt-0 pt-4">
            <UserCard
              name={"da[ukenage namath illagana oni"}
              price={data?.fee||0}
              phoneNumber={data?.contactNumber||""}
              whenToPay={data?.paymentMethod||""}
            />
            <WarningCard/>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row md:gap-4 sm:gap-4 gap-2 md:pt-4 sm:pt-4 pt-2 md:pl-4 sm:pl-4'>
          <PropertyDetails details={[...propertyInfo, ...propertyInfo]} description={data?.description||""} mapLocation={Property.mapLocation} />
        </div>
    </div>
  );
}
