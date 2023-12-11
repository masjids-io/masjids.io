import Head from 'next/head';
import { Center, Container, rem } from '@mantine/core';
import { ContactForm } from '../components/contact';
import { Navbar } from '../components/navbar';
import { LandingPage } from '../components/landing_page';

const HEADER_HEIGHT = rem(60);

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
      <Container className="box">
        <LandingPage></LandingPage>
        <Center>
          <ContactForm></ContactForm>
        </Center>
      </Container>
    </>
  );
}
