import React from 'react';
import MenuNavigationItem from '@components/MenuNavigation/MenuNavigationItem';
import { MenuNavigationProps } from './types';
import Box from '../Box/Box';

const MenuNavigation: React.FC<MenuNavigationProps> = ({ items }) => {
  const renderItems = () => {
    return (items ?? []).map((item, itemIndex) => {
      return <MenuNavigationItem key={`navigation-menu-${itemIndex}`} title={item?.title} path={item?.path} />;
    });
  };

  return (
    <Box flexDirection="row" data-testid="header-navigation">
      {renderItems()}
    </Box>
  );
};

export default MenuNavigation;
