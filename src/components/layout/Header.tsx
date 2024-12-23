import GNLogoUrl from '@/assets/gn_logo.svg';

const Header = () => {
  return (
    <header className="flex-shrink-0 border-b">
      <div className="mx-auto w-full px-4 py-6">
        <div className="relative flex items-center justify-between">
          {/* 로고 - 왼쪽 */}
          <div className="flex items-center">
            <img
              src={GNLogoUrl}
              width={100}
              alt="GN Logo"
              className="transition-opacity hover:opacity-90"
            />
          </div>

          {/* 행사명 - 중앙 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="space-y-1">
              <h1 className="text-xl font-bold tracking-wide">2024 GN 종무식</h1>
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </div>
          </div>

          {/* 오른쪽 여백을 위한 더미 div */}
          <div className="w-[100px]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
