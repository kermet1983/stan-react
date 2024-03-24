import { MasterLayoutProps } from '@/types';
import ErrorBoundary from '@containers/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import Header from '../Header/Header';

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <ErrorBoundary fallback={<div>An unknow error occurred. Please try again</div>}>{children}</ErrorBoundary>
    </Suspense>
  );
};

export default MasterLayout;
