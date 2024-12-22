import { Sparkles } from 'lucide-react';

const Greeting = () => {
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">
        <Sparkles className="h-12 w-12 animate-pulse text-yellow-500" />
      </div>
      <h1 className="mb-3 text-4xl font-bold">GN 동료 빙고</h1>
      <p className="text-lg text-muted-foreground">
        2024년을 마무리하며,{' '}
        <span className="font-medium text-foreground">서로를 더 잘 알아가는 시간</span>
      </p>
    </div>
  );
};

export default Greeting;
