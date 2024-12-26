import { cn } from '@/lib/utils';
import { Card } from '../ui/card';
import { useState } from 'react';

interface BingoCardProps {
  row: number;
  col: number;
  member: string;
  isSelected: boolean;
  isInBingoLine: boolean;
  toggleCell: (row: number, col: number) => void;
}

const BingoCard = ({ row, col, member, isSelected, isInBingoLine, toggleCell }: BingoCardProps) => {
  const isDevelopment = import.meta.env.DEV;
  const imageSrc = isDevelopment ? `https://picsum.photos/200` : `/assets/people/${member}.webp`;

  const [imageError, setImageError] = useState(false);

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
            'break-all',
          )}
          style={{ backfaceVisibility: 'hidden' }}>
          {member}
        </Card>

        {/* 뒷면 */}
        <Card
          className={cn(
            'absolute inset-0 flex aspect-square cursor-pointer items-center justify-center overflow-hidden text-xs',
            isSelected && 'bg-blue-100',
            isInBingoLine && 'bg-green-100 hover:bg-green-200',
          )}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}>
          {!imageError ? (
            <>
              <img
                src={imageSrc}
                alt={`Profile of ${member}`}
                className="h-full w-full rounded object-cover"
                onError={() => setImageError(true)}
              />
              <p className="absolute bottom-0 w-full bg-black/20 text-center text-white backdrop-blur">
                {member}
              </p>
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center p-2 text-center">
              {member}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default BingoCard;
