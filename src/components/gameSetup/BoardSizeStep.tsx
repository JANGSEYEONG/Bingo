import { Button } from '../ui/button';

// BoardSizeStep 컴포넌트
const BoardSizeStep = ({
  selectedSize,
  onSizeSelect,
}: {
  selectedSize: 3 | 4 | 5;
  onSizeSelect: (size: 3 | 4 | 5) => void;
}) => {
  return (
    <div className="space-y-4">
      <label className="block font-medium">1. 보드 크기 선택</label>
      <div className="flex justify-center gap-3">
        {[3, 4, 5].map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? 'default' : 'outline'}
            className="relative h-28 w-full p-2"
            onClick={() => onSizeSelect(size as 3 | 4 | 5)}>
            <div className="flex flex-col items-center gap-2">
              <div
                className="grid gap-0.5"
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
  );
};

export default BoardSizeStep;
