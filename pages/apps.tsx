import Head from 'next/head';
import { ApplicationCard } from '../components/application_card';
import { Navbar } from '../components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>masjids.io</title>
        <meta name="description" content="masjids.io home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ApplicationCard
            title="masjids.io"
            description="A modern cloud platform for masjids."
            image="/images/masjid.png"
            url="https://masjids.io"
          />
          <ApplicationCard
            title="nikkah.io"
            description="A matrimonial platform for Muslims designed ground up to match the needs of the Muslim community."
            image="/images/nikkah.png"
            url="https://nikkah.io"
          />
          <ApplicationCard
            title="adhan.io"
            description="An innovative adhan app to foster greater masjid engagement."
            image="/images/adhan.png"
            url="https://adhan.io"
          />
        </div>
      </div>
    </>
  );
}
