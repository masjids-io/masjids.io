import Head from "next/head";
import { Button, Box, Center, Container, Header, Group, rem } from "@mantine/core";

const HEADER_HEIGHT = rem(60);

export default function Home() {
  return (
    <>
      <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
        <Container fluid>
          <Group>
            masjids.io
          </Group>
          <Group>
            <Button radius="xl" h={20}>
              Sign Up/Login
            </Button>
          </Group>
        </Container>
      </Header>
      <Head>
        <title>masjids.io</title>
        <meta name="description" content="masjids.io home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="box">
        <Center h={724} mx="auto">
          <Box>TO DO</Box>
        </Center>
      </Container>
    </>
  );
}
