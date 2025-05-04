'use client';

import ContentSection from '@/app/components/Dashboard/ContentSection';
import Header from '@/app/components/Dashboard/Header';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
        <ContentSection/>
    </div>
  );
}
