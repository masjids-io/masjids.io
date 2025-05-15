import { Paper, Title, Container, Button } from '@mantine/core';
import FormInput from './form_input';

export function Signup() {
  return (
    <Container size={420} my={40}>
      <Title ta="center">Create an account today!</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <FormInput
          type="text"
          label="First Name"
          value=""
          placeholder="Yahya"
          validateFn={(val) => val.length > 0}
          errorMsg="First name must be greater than 1 character."
          required={true}
          autocomplete="given-name"
        ></FormInput>
        <FormInput
          type="text"
          label="Last Name"
          value=""
          placeholder="Doe"
          validateFn={(val) => val.length > 0}
          errorMsg="Last name must be greater than 1 character."
          required={true}
          autocomplete="family-name"
        ></FormInput>
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
          autocomplete="new-password"
        ></FormInput>
        <FormInput
          type="password"
          label="Confirm Password"
          value=""
          placeholder="Your password"
          validateFn={(val) => val.length > 8}
          errorMsg="Password must be greater than 8 characters."
          required={true}
          autocomplete="new-password"
        ></FormInput>
        <Button fullWidth mt="xl" className="bg-[#135D66] hover:bg-[#349aa7]">
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
}
