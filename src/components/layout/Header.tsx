import { PartyPopper } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b">
      <div className="mx-auto w-full px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PartyPopper className="h-5 w-5 text-yellow-500" />
            <span className="font-bold">2024 GN 종무식</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
