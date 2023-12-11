import Head from 'next/head';
import { Container } from '@mantine/core';
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
      <Container className="box">
        <ApplicationCard
          title="nikkah.io"
          description="A modern Islamic matrimonial platform"
          image="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          url="nikkah.io"
        ></ApplicationCard>
        <ApplicationCard
          title="adhan.io"
          description="An innovative adhan app"
          image="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          url="adhan.io"
        ></ApplicationCard>
      </Container>
    </>
  );
}
