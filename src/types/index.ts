import React, { ReactElement } from 'react';

export interface ContentLayoutProps {
  children: ReactElement | null;
}

export interface MasterLayoutProps {
  children: ReactElement | null;
}

export interface MenuNavigationItemProps {
  title: string;
  path: string;
  target?: '_blank' | 'self';
}

export interface MenuNavigationProps {
  items: MenuNavigationItemProps[];
}
