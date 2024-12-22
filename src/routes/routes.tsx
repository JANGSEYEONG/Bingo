import { createBrowserRouter } from 'react-router';

import Home from '../pages/home/HomePage';
import Game from '../pages/game/GamePage';
import Layout from '../components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'game',
        element: <Game />,
      },
    ],
  },
]);

export default router;
