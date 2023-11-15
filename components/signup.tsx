import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

export function Signup() {
  return (
    <Container size={420} my={40}>
      <Title ta="center">Create an account today!</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="First Name" placeholder="First Name" required />
        <TextInput label="Last Name" placeholder="Last Name" required />
        <TextInput label="Email" placeholder="example@example.com" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
}
