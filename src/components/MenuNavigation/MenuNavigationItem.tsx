import { MenuNavigationItemProps } from '@/types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../Box/Box';

const StyledMenuNavigationItem = styled(Box)`
  a {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    font-weight: 900;
    padding: 5px;
    margin: 0 10px;
    &.activeLink {
      color: #fff;
    }
  }
`;

const MenuNavigationItem: React.FC<MenuNavigationItemProps> = ({ title, path, target }) => {
  const pathTo = path ?? '/';
  return (
    <StyledMenuNavigationItem>
      <NavLink target={target} to={pathTo} className={({ isActive }) => (isActive ? 'activeLink' : 'link')} end>
        {title}
      </NavLink>
    </StyledMenuNavigationItem>
  );
};

export default MenuNavigationItem;
