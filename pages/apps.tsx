import Head from 'next/head';
import { Container, SimpleGrid } from '@mantine/core';
import { ApplicationCard } from '../components/application_card';
import { Navbar } from '../components/navbar';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Head>
        <title>masjids.io</title>
        <meta name="description" content="masjids.io home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <SimpleGrid cols={3} spacing="xl" breakpoints={[
          { maxWidth: 'sm', cols: 1, spacing: 'md' },
          { maxWidth: 'md', cols: 2, spacing: 'md' },
          { maxWidth: 'lg', cols: 3, spacing: 'xl' },
        ]}>
          <ApplicationCard
            title="masjids.io"
            description="A modern cloud platform for masjids."
            image="/images/masjidnikkah.jpeg"
            url="masjids.io"
          />
          <ApplicationCard
            title="nikkah.io"
            description="A matrimonial platform for Muslims designed ground up to match the needs of the Muslim community."
            image="/images/masjidnikkah.jpeg"
            url="nikkah.io"
          />
          <ApplicationCard
            title="adhan.io"
            description="An innovative adhan app to foster greater masjid engagement."
            image="/images/muezzin.jpeg"
            url="adhan.io"
          />
        </SimpleGrid>
      </Container>
    </>
  );
}
