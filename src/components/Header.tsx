import * as React from 'react';
import {
  Button,
  ColorMode,
  Flex,
  Heading,
  Image,
  Link,
  ToggleButton,
  ToggleButtonGroup,
} from '@aws-amplify/ui-react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/theme';

function Header() {
  const colorMode = useSelector((state: any) => state.theme.theme as ColorMode);
  const dispatch = useDispatch();
  const setColorMode = (value: ColorMode) => {
    dispatch(changeTheme(value));
  };
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      alignContent="flex-start"
      wrap="wrap"
      gap="1rem"
    >
      <Flex
        direction="row"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        <ReactRouterLink to="/">
          <Image
            alt="logo"
            src="/images/my-logo.png"
            objectFit="initial"
            objectPosition="50% 50%"
            height="32px"
            width="32px"
          />
        </ReactRouterLink>
        <ReactRouterLink to="/"><Heading width="30vw" level={3}>Bervianto Leo Pratama</Heading></ReactRouterLink>
      </Flex>
      <Flex
        direction="row"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        <Link href="https://github.com/bervProject/my-personal-web-react" isExternal><Button isFullWidth>Github</Button></Link>
        <ToggleButtonGroup
          value={colorMode}
          isExclusive
          onChange={(value: ColorMode) => setColorMode(value)}
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
          <ToggleButton value="system">System</ToggleButton>
        </ToggleButtonGroup>
      </Flex>
    </Flex>
  );
}
export default Header;
