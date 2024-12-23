import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex min-h-dvh w-screen justify-center">
      <div className="relative flex w-full max-w-lg flex-col">
        <Header />
        <main className="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
