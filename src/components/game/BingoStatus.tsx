import { BINGO_TO_WIN } from '@/constants/game';

interface BingoStatusProps {
  bingoCount: number;
}

const BingoStatus = ({ bingoCount = 0 }: BingoStatusProps) => {
  const progress = (bingoCount / BINGO_TO_WIN) * 100;

  return (
    <div className="space-y-2">
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-500/10">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white/40 px-4 py-3 backdrop-blur-sm">
        <span className="font-bold text-gray-800">현재 빙고</span>
        <span className="text-xl font-bold text-gray-800">
          {bingoCount} / {BINGO_TO_WIN}
        </span>
      </div>
    </div>
  );
};

export default BingoStatus;
