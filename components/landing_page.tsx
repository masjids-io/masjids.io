import React from 'react';
import {
  MantineProvider,
  Center,
  Container,
  Title,
  Text,
  Button,
  Image,
  Card,
} from '@mantine/core';
import { ContactForm } from './contact';

export function LandingPage() {
  return (
    <MantineProvider>
      <section className="hero relative w-full h-screen bg-cover bg-center mt-0" style={{ backgroundImage: 'url(/images/masjid1.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="flex items-center justify-center h-full text-white z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Welcome to masjids.io</h1>
            <p className="mt-4 text-lg text-white">Your one-stop shop for masjid technology.</p>
            <Button className="mt-4" color="lime" variant="filled">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <Container size="lg" py="xl">
        <Center>
          <ContactForm />
        </Center>
      </Container>
      <footer className="bg-gray-200 py-4">
        <Container size="lg">
          <Text align="center">&copy; 2025 masjids.io | <a href="#">Privacy Policy</a></Text>
        </Container>
      </footer>
    </MantineProvider>
  );
}
