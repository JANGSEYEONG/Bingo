import Greeting from './components/Greeting';
import Rules from './components/Rules';
import GameSetupWizard from './components/GameSetupWizard';
import { useEffect } from 'react';
import { BingoStateManager } from '@/lib/gameStateManager';

const HomePage = () => {
  // 홈 페이지 접속 시, 게임 상태 초기화
  useEffect(() => {
    const savedState = BingoStateManager.getGameState();
    if (savedState) {
      BingoStateManager.clearGameState();
    }
  }, []);

  return (
    <div className="px-4 py-8">
      <div className="space-y-5">
        {/* 상단 환영 메시지 */}
        <Greeting />
        {/* 게임 룰 */}
        <Rules />
        {/* 게임 설정 카드 */}
        <GameSetupWizard />
      </div>
    </div>
  );
};

export default HomePage;
