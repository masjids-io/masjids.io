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
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/masjid1.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        <div className="relative z-10 h-full flex  md:flex-row flex-col-reverse">
          {/* Left Column (Search Box) */}
          <div className=" flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-lg text-white text-center md:text-left bg-black bg-opacity-25 p-6 sm:p-12 rounded-lg">
              <h1 className="text-4xl font-bold mb-4">Find a Masjid</h1>
              <p className="mb-4 text-lg">
                Find masjids near you or search by city, area, or name. Stay
                connected with your local Islamic community.
              </p>
              <p className="mb-6 text-sm text-gray-200">
                Start by entering the name of a masjid or location below:
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search for masjids..."
                  className="p-3 rounded-md w-full md:w-auto flex-1 text-black"
                />
                <button className="w-full md:w-auto p-3 bg-[#135D66] hover:bg-[#349aa7] rounded-md">
                  Search
                </button>
              </div>
              <button className="mt-5 w-full p-3 bg-[#135D66] hover:bg-[#349aa7] rounded-md">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Column (Original content) */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-white text-center md:text-left max-w-md">
              <h1 className="text-5xl font-bold">Welcome to masjids.io</h1>
              <p className="mt-4 text-lg">
                Your one-stop shop for masjid technology. Explore prayer times,
                events, donations, and more — all in one place.
              </p>

              {/* Mobile Search (Visible only on small screens) */}
              {/* <div className="flex sm:hidden flex-row gap-4 mt-5">
                <input
                  type="text"
                  placeholder="Search for masjids..."
                  className="p-3 rounded-md md:w-auto flex-1 text-black"
                />
                <button className="w-full md:w-auto p-3 bg-lime-500 rounded-md">
                  Search
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <footer className="bg-gray-200 py-4">
        <Container size="lg">
          <Text align="center">
            &copy; 2025 masjids.io | <a href="#">Privacy Policy</a>
          </Text>
        </Container>
      </footer>
    </MantineProvider>
  );
}
