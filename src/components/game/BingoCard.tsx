import { cn } from '@/lib/utils';
import { Card } from '../ui/card';

interface BingoCardProps {
  row: number;
  col: number;
  member: string;
  isSelected: boolean;
  isInBingoLine: boolean;
  toggleCell: (row: number, col: number) => void;
}

const BingoCard = ({ row, col, member, isSelected, isInBingoLine, toggleCell }: BingoCardProps) => {
  const imageUrl = 'https://picsum.photos/200/300';

  return (
    <div className="relative h-full w-full perspective-1000" onClick={() => toggleCell(row, col)}>
      <div
        className={cn(
          'relative h-full w-full transition-transform duration-500',
          isSelected && 'rotate-y-180',
        )}
        style={{ transformStyle: 'preserve-3d' }}>
        {/* 앞면 */}
        <Card
          className={cn(
            'xs:p-1 xs:text-sm absolute inset-0 flex aspect-square cursor-pointer items-center justify-center p-0.5 text-xs sm:text-base',
            !isSelected && 'hover:bg-gray-50',
            isInBingoLine && 'bg-green-200 hover:bg-green-200',
            'break-all',
          )}
          style={{ backfaceVisibility: 'hidden' }}>
          {member}
        </Card>

        {/* 뒷면 */}
        <Card
          className="absolute inset-0 flex aspect-square cursor-pointer items-center justify-center overflow-hidden p-1"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}>
          <img src={imageUrl} alt={member} className="h-full w-full rounded object-cover" />
        </Card>
      </div>
    </div>
  );
};

export default BingoCard;
