import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { MasterLayout } from '@containers/Layouts';
import Home from '@pages/Home';
import Program from '@pages/Program';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  { path: 'program/:programId', element: <Program /> },
  // typically this would 404
  { path: '*', element: <Home /> },
];

const App: React.FC = () => {
  const appRoutes = useRoutes(routes);
  return <MasterLayout>{appRoutes}</MasterLayout>;
};

export default App;
