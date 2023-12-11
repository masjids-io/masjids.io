import React from 'react';
import { createStyles, Card, Center, Image, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    display: 'flex',
  },
}));

export function ApplicationCard({ title, description, image, url }) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder padding="lg" shadow="md">
      <a href={url}>
        <Center>
          <Image src={image} alt={title} height={100} width={100} radius="md" />
        </Center>
        <Card.Section>
          <Center>
            <Text weight="bold" size="lg">
              {title}
            </Text>
          </Center>
          <Center>
            <Text size="sm" className={classes.footer}>
              {description}
            </Text>
          </Center>
        </Card.Section>
      </a>
    </Card>
  );
}
