import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
const GameSetupWizard = () => {
  const [selectedSize, setSelectedSize] = useState<3 | 4 | 5>(5);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/game', { state: { boardSize: selectedSize } });
  };
  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-xl">게임 설정</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 보드 크기 선택 */}
        <div>
          <label className="mb-2 block text-sm font-medium">보드 크기 선택</label>
          <div className="flex justify-center gap-3">
            {[3, 4, 5].map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'default' : 'outline'}
                className="relative h-24 w-full p-2"
                onClick={() => setSelectedSize(size as 3 | 4 | 5)}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="grid gap-1"
                    style={{
                      gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
                    }}>
                    {Array(size * size)
                      .fill(null)
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-sm ${
                            selectedSize === size ? 'bg-white' : 'bg-foreground/20'
                          }`}
                        />
                      ))}
                  </div>
                  <span className="text-sm">
                    {size}×{size}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* 시작 버튼 */}
        <Button size="lg" onClick={handleStart} className="w-full" variant="default">
          게임 시작하기
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameSetupWizard;
