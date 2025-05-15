// pages/coming-soon.jsx
import Head from 'next/head';
import { Navbar } from '../components/navbar';

export default function Documentation() {
  return (
    <>
      <Navbar />

      <Head>
        <title>masjids.io — Coming Soon</title>
        <meta name="description" content="masjids.io is coming soon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
        <h1 className="text-6xl font-extrabold text-gray-800">Coming Soon</h1>
        <p className="mt-4 text-xl text-gray-600">
          We’re working hard to bring you something amazing.
        </p>
      </div>
    </>
  );
}
