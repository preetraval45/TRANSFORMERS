'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Uploads() {
  const router = useRouter();

  useEffect(() => {
    router.push('/shipments');
  }, [router]);

  return null;
}