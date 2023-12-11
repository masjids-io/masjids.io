import {
  createStyles,
  rem,
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

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.black,
    fontWeight: 250,
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colors.green[0],
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export function Navbar() {
  const [drawerOpen, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [login_opened, { toggle: login_open, close: login_close }] =
    useDisclosure(false);
  const [signup_opened, { toggle: signup_open, close: signup_close }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="/apps" className={classes.link}>
              Apps
            </a>
            <a href="#" className={classes.link}>
              Documentation
            </a>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Modal
              opened={login_opened}
              onClose={login_close}
              withCloseButton={false}
            >
              <Login></Login>
            </Modal>
            <Button
              variant="gradient"
              gradient={{ from: 'lime', to: 'lime', deg: 0 }}
              onClick={login_open}
            >
              Log in
            </Button>
            <Modal
              opened={signup_opened}
              onClose={signup_close}
              withCloseButton={false}
            >
              <Signup></Signup>
            </Modal>
            <Button
              variant="gradient"
              gradient={{ from: 'teal', to: 'teal', deg: 0 }}
              onClick={signup_open}
            >
              Sign up
            </Button>
          </Group>

          <Burger
            opened={drawerOpen}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpen}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="masjids.io"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={'gray.1'} />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Apps
          </a>
          <a href="#" className={classes.link}>
            Documentation
          </a>

          <Divider my="sm" color={'gray.1'} />

          <Group position="center" grow px="md">
            <Button
              variant="gradient"
              gradient={{ from: 'lime', to: 'lime', deg: 0 }}
            >
              Log in
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: 'teal', to: 'teal', deg: 0 }}
            >
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
