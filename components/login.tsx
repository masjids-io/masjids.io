import {
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import FormInput from './form_input';

export function Login() {
  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome back!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form>
          <FormInput
            type="text"
            label="Email"
            value=""
            placeholder="example@example.com"
            validateFn={(val) => val.includes('@')}
            errorMsg="Invalid email address."
            required={true}
            autocomplete="username"
          ></FormInput>
          <FormInput
            type="password"
            label="Password"
            value=""
            placeholder="Your password"
            validateFn={(val) => val.length > 8}
            errorMsg="Password must be greater than 8 characters."
            required={true}
            autocomplete="current-password"
          ></FormInput>
        </form>
        <Group mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
