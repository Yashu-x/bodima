'use client';
import ListingTitle from '@/app/components/ListingPage/ListingTitle';
import { useParams } from 'next/navigation';

export default function ListPage() {
  const params = useParams();
  const { id } = params;
  return (
    <div className='min-h-screen'>
        <ListingTitle title='Annexe For rent in Wijerama Rubber Waththa' postedDate="16 Apr 10:43 am" location="Rubber waththa Rd ,Nugegoda ,Colombo" views={12} />
    </div>
  );
}
