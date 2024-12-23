import { useState } from 'react';
import { useLocation } from 'react-router';

import BingoWin from '@/components/game/BingoWin';
import BingoBoard from '@/components/game/BingoBoard';
import BingoStatus from '@/components/game/BingoStatus';

interface GameState {
  boardSize: number;
  selectedMembers: string[];
}

const GamePage = () => {
  const { state } = useLocation() as { state: GameState };
  const { boardSize, selectedMembers } = state;
  const [bingoCount, setBingoCount] = useState(0);
  const handleBingoChange = (count: number) => {
    setBingoCount(count);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <BingoStatus bingoCount={bingoCount} />
      <BingoBoard size={boardSize} members={selectedMembers} onBingoChange={handleBingoChange} />
      <BingoWin bingoCount={bingoCount} />
    </div>
  );
};

export default GamePage;
