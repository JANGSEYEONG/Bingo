import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { messages } from '@/constants/message';

interface BingoAlarmProps {
  bingoCount: number;
}
const BingoAlarm = ({ bingoCount }: BingoAlarmProps) => {
  const [prevCount, setPrevCount] = useState(bingoCount);
  const [show, setShow] = useState(false);

  // 메시지가 정의되지 않은 빙고 카운트에 대한 처리 추가
  const currentMessage = messages[bingoCount as keyof typeof messages] || {
    text: `${bingoCount}빙고! 무슨 숫자죠 이건..`,
    style: 'bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent',
  };

  useEffect(() => {
    if (bingoCount !== prevCount && bingoCount > 0) {
      setShow(true);
      setPrevCount(bingoCount);

      setTimeout(() => setShow(false), 2000);
    }
  }, [bingoCount]);

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className={cn(
          'animate-[scale-bounce_2s_ease-in-out] whitespace-pre-wrap text-3xl font-black',
          currentMessage.style,
        )}>
        {currentMessage.text}
      </div>
    </div>
  );
};

export default BingoAlarm;
