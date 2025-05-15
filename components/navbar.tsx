import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  Header,
  Modal,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Login } from './login';
import { Signup } from './signup';
import Link from 'next/link';

export function Navbar() {
  const [drawerOpen, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [login_opened, { toggle: login_open, close: login_close }] =
    useDisclosure(false);
  const [signup_opened, { toggle: signup_open, close: signup_close }] =
    useDisclosure(false);

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Group sx={{ height: '100%' }} spacing={0} className="hidden-mobile">
            <Link href="/" legacyBehavior>
              <a className="navbar-link">Home</a>
            </Link>
            <Link href="/apps" legacyBehavior>
              <a className="navbar-link">Apps</a>
            </Link>
            <Link href="/documentation" legacyBehavior>
              <a className="navbar-link">Documentation</a>
            </Link>
          </Group>

          <Group className="hidden-mobile">
            <Modal
              opened={login_opened}
              onClose={login_close}
              withCloseButton={false}
            >
              <Login />
            </Modal>
            <Button
              className="bg-[#135D66] hover:bg-[#349aa7]"
              onClick={login_open}
            >
              Log in
            </Button>
            <Modal
              opened={signup_opened}
              onClose={signup_close}
              withCloseButton={false}
            >
              <Signup />
            </Modal>
            <Button
              className="bg-[#77B0AA] hover:bg-[#85c9c1]"
              onClick={signup_open}
            >
              Sign up
            </Button>
          </Group>

          <Burger
            opened={drawerOpen}
            onClick={toggleDrawer}
            className="hidden-desktop"
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpen}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={<h2 className="text-2xl font-bold">masjids.io</h2>}
        className="hidden-desktop"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 60px)" mx="-md">
          <Divider my="sm" color="gray.1" />

          <Link href="/" legacyBehavior>
            <a className="navbar-link">Home</a>
          </Link>
          <Link href="/apps" legacyBehavior>
            <a className="navbar-link">Apps</a>
          </Link>
          <Link href="/documentation" legacyBehavior>
            <a className="navbar-link">Documentation</a>
          </Link>

          <Divider my="sm" color="gray.1" />

          <Group position="center" grow px="md">
            <Button
              className="bg-[#135D66] hover:bg-[#349aa7]"
              onClick={() => {
                closeDrawer(), login_open();
              }}
            >
              Log in
            </Button>
            <Button
              className="bg-[#77B0AA] hover:bg-[#85c9c1]"
              onClick={() => {
                closeDrawer(), signup_open();
              }}
            >
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
