import { MasterLayout } from '@containers/Layouts';
import React, { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const Program = lazy(() => import('@pages/Program'));

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
