import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

interface AppRouterProps {
  children: JSX.Element;
}

const AppRouter: React.FC<AppRouterProps> = ({ children }) => {
  return <Router>{children}</Router>;
};

export default AppRouter;
