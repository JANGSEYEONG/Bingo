import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex h-dvh w-screen justify-center">
      <div className="relative h-screen w-full max-w-lg shadow-lg">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
