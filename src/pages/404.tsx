import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-shimmer text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found!</h1>
            <Link href='/'>
              <a className='mt-8 text-xl'>Back to Home</a>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
