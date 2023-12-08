import React from 'react';
import {
  MantineProvider,
  Center,
  Container,
  Title,
  Text,
  Button,
  Image,
} from '@mantine/core';

export function LandingPage() {
  return (
    <MantineProvider>
      <Container size="lg" py="xl">
        <Title order={1} weight="bold" align="center">
          masjids.io
        </Title>
        <Text size="lg" align="center" color="gray">
          masjids.io is a one-stop shop for your masjid's technological needs.
        </Text>
        <Image
          src="https://t4.ftcdn.net/jpg/03/17/31/99/360_F_317319974_fzB2wFm7HEexuMfQBxzLW2uTfM9jByuh.jpg"
          alt="Landing Page Image"
          radius="md"
          mx="auto"
          mt="lg"
        />
        <Center>
          <Button
            size="md"
            variant="gradient"
            gradient={{ from: 'lime', to: 'lime', deg: 0 }}
            radius="md"
            mt="lg"
            mx="auto"
          >
            Get Started Today!
          </Button>
        </Center>
      </Container>
    </MantineProvider>
  );
}
