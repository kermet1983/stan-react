import { Box } from '@/components';
import { ContentLayoutProps } from '@/types';
import React from 'react';

const ContentLayout: React.FC<ContentLayoutProps> = ({ children, ...styles }) => {
  return (
    <Box padding="0 40px 40px" {...styles}>
      {children}
    </Box>
  );
};

export default ContentLayout;
