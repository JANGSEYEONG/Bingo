// Header.tsx
import { Home, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="border-b">
      <div className="mx-auto w-full px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PartyPopper className="h-5 w-5 text-yellow-500" />
            <span className="font-bold">2024 GN 종무식</span>
          </div>
          {!isHome && (
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              <Home className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
