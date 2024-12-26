import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import BingoWin from '@/components/game/BingoWin';
import BingoBoard from '@/components/game/BingoBoard';
import BingoStatus from '@/components/game/BingoStatus';
import BingoAlarm from '@/components/game/BingoAlarm';
import { BingoStateManager } from '@/lib/gameStateManager';

interface GameState {
  boardSize: number;
  selectedMembers: string[];
}

const GamePage = () => {
  const { state } = useLocation() as { state: GameState };
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
      return;
    }
  }, [state, navigate]);

  if (!state) return null;

  const { boardSize, selectedMembers } = state;

  const [bingoCount, setBingoCount] = useState(() => {
    const savedState = BingoStateManager.getGameState();
    return savedState ? savedState.bingoLines.length : 0;
  });

  // clearGameState는 게임 시작 시에만 실행되도록 수정
  useEffect(() => {
    const savedState = BingoStateManager.getGameState();
    if (!savedState) {
      BingoStateManager.clearGameState();
    }
  }, []);

  const handleBingoChange = (count: number) => {
    setBingoCount(count);
  };

  return (
    <div className="relative flex w-full flex-col gap-6">
      <BingoStatus bingoCount={bingoCount} />
      <BingoBoard size={boardSize} members={selectedMembers} onBingoChange={handleBingoChange} />
      <BingoWin bingoCount={bingoCount} />
      <BingoAlarm bingoCount={bingoCount} />
    </div>
  );
};

export default GamePage;
