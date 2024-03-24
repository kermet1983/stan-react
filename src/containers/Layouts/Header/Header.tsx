import React from 'react';

import { MenuNavigation } from '@components/MenuNavigation';
import styled from 'styled-components';
import { Box } from '@/components';
import { Link } from 'react-router-dom';
import Image from '@/components/Image/Image';

const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Tv Shows',
    path: '/programs',
  },
  {
    title: 'Movies',
    path: '/movies',
  },
];

const StyledHeader = styled.header`
  .logo-wrapper {
    img {
      width: 5rem;
      max-width: 100%;
    }
  }
  .menu-navigation-wrapper {
    margin-left: 40px;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader data-testid="header-layout">
      <Box padding="0 40px" margin="0 0 40px 0">
        <Box flexDirection="row" height="60px" alignItems="center">
          <Box className="logo-wrapper">
            <Link to="/">
              <Image src="/images/logo.svg" alt="Stan" data-testid="header-logo" />
            </Link>
          </Box>
          <Box margin="0 0 0 40px">
            <MenuNavigation items={menuItems} />
          </Box>
        </Box>
      </Box>
    </StyledHeader>
  );
};

export default Header;
