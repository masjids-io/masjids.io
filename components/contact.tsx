import React, { useState } from 'react';
import {
  MantineProvider,
  Container,
  TextInput,
  Textarea,
  Title,
  Button,
  Group,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export function ContactForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (values) => {
    // Validate form data
    if (form.errors.length) {
      setStatus('Please fix the errors.');
      return;
    }

    // Send the form data
    try {
      // You can use an external library like `axios` or `fetch` to send the data to a server-side script
      // for further processing. For this example, we will just simulate sending the data.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('Your message has been sent. Thank you!');
      form.reset();
    } catch (error) {
      setStatus('Error sending your message.');
      console.error(error);
    }
  };

  return (
    <MantineProvider>
      <Container size="lg" py="xl">
        <Title order={2} align="center" mb="md">
          Contact Us
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Group direction="row">
            <TextInput
              label="Name"
              placeholder="Your Name"
              {...form.getInputProps('name')}
              required
            />
            <TextInput
              label="Email"
              placeholder="Your Email"
              {...form.getInputProps('email')}
              required
              error={form.errors.email}
            />
          </Group>
          <Textarea
            label="Message"
            placeholder="Your Message..."
            {...form.getInputProps('message')}
            required
          />
          <Group mt="md" justify="end">
            <Button type="submit" size="md">
              Send Message
            </Button>
          </Group>
          {status && (
            <Text size="sm" color={status.includes('Error') ? 'red' : 'teal'}>
              {status}
            </Text>
          )}
        </form>
      </Container>
    </MantineProvider>
  );
}
