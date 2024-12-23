import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex h-dvh w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <div className="text-6xl">😅</div>
        <h1 className="text-2xl font-bold">앗! 문제가 발생했어요</h1>
        <p className="text-gray-600">홈에서 게임을 다시 설정해 주세요</p>
        <Link to={'/'}>
          <Button variant="secondary" className="border border-slate-200">
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
