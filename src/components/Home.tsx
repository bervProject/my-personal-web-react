import React from 'react';
import {
  Button,
  Card,
  Flex,
  Image,
  Text,
  Link,
} from '@aws-amplify/ui-react';

function Home() {
  return (
    <Card variation="elevated">
      <Flex direction="column">
        <Image
          alt="Bervianto Leo Pratama"
          src="/images/me.jpg"
          objectFit="initial"
          objectPosition="50% 50%"
          height="150px"
          width="150px"
        />
        <Text>
          He&apos;s a Software Engineer who loves to learn every day.
          He is interested in DevOps, Microservices, and Cloud Services.
          He also loves blogging and advocating for the community.
        </Text>
        <Link href="https://berviantoleo.my.id/about" isExternal><Button isFullWidth>Learn More</Button></Link>
      </Flex>
    </Card>
  );
}

export default Home;
