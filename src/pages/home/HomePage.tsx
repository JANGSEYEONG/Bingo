import Greeting from './components/Greeting';
import Rules from './components/Rules';
import GameSetupWizard from './components/GameSetupWizard';

const HomePage = () => {
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
