import React from 'react';
import { Box } from '@/components';
import { ContentLayoutProps } from '@/types';

const ContentLayout: React.FC<ContentLayoutProps> = ({ children, ...styles }) => {
  return (
    <Box padding="0 40px 40px" {...styles}>
      {children}
    </Box>
  );
};

export default ContentLayout;
