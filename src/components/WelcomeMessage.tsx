import { VStack, Link, Text } from '@chakra-ui/react';
import React from 'react';

function WelcomeMessage() {
  return (
    <VStack margin={4} spacing={4} rounded={2} maxWidth="650px" fontSize="lg">
      <Text>
        Welcome to the Runway frontend exercise! We really appreciate you taking time to show us
        your frontend development skills.
      </Text>
      <Text>
        This repository is configured with a bunch of widely-used tools that are part of our
        frontend engineering stack at Runway: React, NextJS, ESLint, Prettier, Sass, and TypeScript.
        It also includes{' '}
        <Link color="#5990de" target="_blank" href="https://chakra-ui.com/docs/getting-started">
          Chakra UI
        </Link>
        , a React component library built on top of the CSS-in-JS library Emotion. It has lots of
        handy building blocks for creating React apps.
      </Text>
      <Text>
        You&apos;re welcome to use some, all, or none of what&apos;s included here. The only goal of
        this repo is to save you the time creating a modern development environment, and to preclude
        things like code formatting from getting in your way. You&apos;re more than welcome to use
        something like{' '}
        <Link color="#5990de" target="_blank" href="https://github.com/facebook/create-react-app">
          create-react-app
        </Link>{' '}
        if you prefer, or to adjust the configuration in this repo to your liking.
      </Text>
      <Text>
        You&apos;ll receive the prompt for the exercise once you're ready to get started. Feel free
        to replace this welcome message and put your work here. Best of luck!
      </Text>
    </VStack>
  );
}

export default WelcomeMessage;
