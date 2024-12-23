import { BINGO_TO_WIN } from '@/constants/game';
import ConfettiDecoration from '../ui/confetti';

interface BingoWinProps {
  bingoCount: number;
}

const BingoWin = ({ bingoCount }: BingoWinProps) => {
  if (bingoCount < BINGO_TO_WIN) return null;

  return (
    <div className="rounded-lg p-4 text-center">
      <div className="animate-bounce space-y-2">
        <div className="flex items-center justify-center gap-3 text-3xl">
          <span className="animate-spin">🎊</span>
          <span className="animate-pulse bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text font-black text-transparent">
            빙고 완성!
          </span>
          <span className="animate-spin">🎊</span>
        </div>

        <div className="animate-pulse text-lg font-bold text-purple-500">축하합니다! 🎉</div>
      </div>
      <ConfettiDecoration />
    </div>
  );
};

export default BingoWin;
