'use client';

import ContentSection from '@/app/components/Dashboard/ContentSection';
import Header from '@/app/components/Dashboard/Header';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const data = [
    {
        imageUrl: 'https://example.com/image.jpg',
        title: 'Beautiful House for Sale',
        toWho: 'For Sale',
        details: [
            { key: 'Bedrooms', value: '3' },
            { key: 'Bathrooms', value: '2' },
            { key: 'Size', value: '1500 sqft' },
        ],
        address: '123 Main St, Cityville',
        price: 'LKR 15,000',
        paymentMethod: 'Monthly',
        id: '1',
        views: 100,
        createdDate: '2023-10-01',
        onDelete: (id:string) => console.log(`Delete ad with id: ${id}`)
    },
    {
        imageUrl: 'https://example.com/image.jpg',
        title: 'Beautiful House for Sale',
        toWho: 'For Sale',
        details: [
            { key: 'Bedrooms', value: '3' },
            { key: 'Bathrooms', value: '2' },
            { key: 'Size', value: '1500 sqft' },
        ],
        address: '123 Main St, Cityville',
        price: 'LKR 15,000',
        paymentMethod: 'Monthly',
        id: '1',
        views: 100,
        createdDate: '2023-10-01',
        onDelete: (id:string) => console.log(`Delete ad with id: ${id}`)
    },
    {
        imageUrl: 'https://example.com/image.jpg',
        title: 'Beautiful House for Sale',
        toWho: 'For Sale',
        details: [
            { key: 'Bedrooms', value: '3' },
            { key: 'Bathrooms', value: '2' },
            { key: 'Size', value: '1500 sqft' },
        ],
        address: '123 Main St, Cityville',
        price: 'LKR 15,000',
        paymentMethod: 'Monthly',
        id: '1',
        views: 100,
        createdDate: '2023-10-01',
        onDelete: (id:string) => console.log(`Delete ad with id: ${id}`)
    },
    {
        imageUrl:'https://media-hosting.imagekit.io/c359d60bd0284d36/classic-cottage-house-trees-road-private-house-city-background-vector-illustration-flat-style-classic-cottage-107918095.webp?Expires=1839725849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJbxR7OhPYvEXtYnbRybSXGnFt~sT5R072nguvk65WnaXyQJ2FFYgYr88WCIMkO9VPVzxn41v5Z5GR6gCFPALyyqgrPNUizk-NEA9HFeKVrm76t43pxRvFdofaQCZzIZqIRwfh82oPJm1xSORCkk14XAjXPQ81FCKvISDquZZ1XlBJYmBr4K-om8yMxMi6Ow3tFcwFoGmoUTlctvK92cdt5VvjT3pruXexSEkboTeV2RGlQkk9VitSNEOxZzNthgIQuBkJqcf4Jze8YX1bnqrnQs9ADYnVacQpgLvB9eFuJFqmDELPgIUOJeAZuqDP-4y1aSE438DBkHP5VzpKDGbw__',
        title: 'Beautiful House for Sale',
        toWho: 'For Sale',
        details: [
            { key: 'Bedrooms', value: '3' },
            { key: 'Bathrooms', value: '2' },
            { key: 'Size', value: '1500 sqft' },
        ],
        address: '123 Main St, Cityville',
        price: 'LKR 15,000',
        paymentMethod: 'Monthly',
        id: '1',
        views: 100,
        createdDate: '2023-10-01',
        onDelete: (id:string) => console.log(`Delete ad with id: ${id}`)
    },
    {
        imageUrl: 'https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__',
        title: 'Beautiful House for Sale',
        toWho: 'For Sale',
        details: [
            { key: 'Bedrooms', value: '3' },
            { key: 'Bathrooms', value: '2' },
            { key: 'Size', value: '1500 sqft' },
        ],
        address: '123 Main St, Cityville',
        price: 'LKR 15,000',
        paymentMethod: 'Monthly',
        id: '1',
        views: 100,
        createdDate: '2023-10-01',
        onDelete: (id:string) => console.log(`Delete ad with id: ${id}`)
    }
]

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);
    
  return (
    <div className='min-h-screen'>
        <Header/>       
        <ContentSection data={data}/>
    </div>
  );
}
