import { useLocation } from 'react-router';
import BingoStatus from '@/components/game/BingoStatus';
import BingoBoard from '@/components/game/BingoBoard';
import { useState } from 'react';

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
    </div>
  );
};

export default GamePage;
