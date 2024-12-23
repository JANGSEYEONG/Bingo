import { BINGO_TO_WIN } from '@/constants/game';

interface BingoStatusProps {
  bingoCount: number;
}

const BingoStatus = ({ bingoCount = 0 }: BingoStatusProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
      <span className="font-medium">현재 빙고</span>
      <span className="text-xl font-bold">
        {bingoCount} / {BINGO_TO_WIN}
      </span>
    </div>
  );
};

export default BingoStatus;
