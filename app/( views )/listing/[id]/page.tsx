'use client';
import ImageCarousel from '@/app/components/ListingPage/ImageCarousel';
import ListingTitle from '@/app/components/ListingPage/ListingTitle';
import { useParams } from 'next/navigation';

const images = [
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
  'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
];

export default function ListPage() {
  const params = useParams();
  const { id } = params;
  return (
    <div className='min-h-screen'>
        <ListingTitle title='Annexe For rent in Wijerama Rubber Waththa' postedDate="16 Apr 10:43 am" location="Rubber waththa Rd ,Nugegoda ,Colombo" views={12} />
        <div className="w-full flex flex-col md:flex-row">
          <ImageCarousel images={images} />
          <div className="flex flex-col w-full bg-white p-4">
            <h2 className="text-2xl font-bold">Description</h2>
          </div>
        </div>
    </div>
  );
}
