import React from 'react';
import { Button, ButtonGroup, Link } from '@aws-amplify/ui-react';
import { Link as ReactRouterLink } from 'react-router-dom';

function Nav() {
  return (
    <ButtonGroup direction="column">
      <ReactRouterLink to="/"><Button isFullWidth>Home</Button></ReactRouterLink>
      <Link href="https://berviantoleo.my.id/community/blog" isExternal><Button isFullWidth>Blog</Button></Link>
      <Link href="https://berviantoleo.my.id/community" isExternal><Button isFullWidth>Community</Button></Link>
      <Link href="https://berviantoleo.my.id/certification" isExternal><Button isFullWidth>Certification</Button></Link>
      <Link href="https://berviantoleo.my.id/projects" isExternal><Button isFullWidth>Projects</Button></Link>
      <Link href="https://berviantoleo.my.id/about" isExternal><Button isFullWidth>About</Button></Link>
    </ButtonGroup>
  );
}

export default Nav;
