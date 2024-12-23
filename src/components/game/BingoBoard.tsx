import { useState, useEffect } from 'react';
import BingoCard from './BingoCard';

interface BingoBoardProps {
  size: number;
  members: string[];
  onBingoChange: (count: number) => void;
}

const BingoBoard = ({ size, members, onBingoChange }: BingoBoardProps) => {
  const [board] = useState(() =>
    [...members].sort(() => Math.random() - 0.5).slice(0, size * size),
  );

  const [selectedCells, setSelectedCells] = useState<boolean[][]>(
    Array(size)
      .fill(null)
      .map(() => Array(size).fill(false)),
  );
  const [bingoLines, setBingoLines] = useState<string[]>([]);

  const checkBingo = () => {
    const newBingoLines: string[] = [];

    // 가로 체크
    for (let i = 0; i < size; i++) {
      if (selectedCells[i].every((cell) => cell)) {
        newBingoLines.push(`h${i}`);
      }
    }

    // 세로 체크
    for (let j = 0; j < size; j++) {
      if (selectedCells.every((row) => row[j])) {
        newBingoLines.push(`v${j}`);
      }
    }

    // 대각선 체크 : 왼쪽 위~오른쪽 아래
    if (selectedCells.every((row, idx) => row[idx])) {
      newBingoLines.push('d1');
    }

    // 대각선 체크 : 오른쪽 위~왼쪽 아래
    if (selectedCells.every((row, idx) => row[size - 1 - idx])) {
      newBingoLines.push('d2');
    }

    setBingoLines(newBingoLines);
    onBingoChange(newBingoLines.length);
  };

  const toggleCell = (row: number, col: number) => {
    const newSelectedCells = selectedCells.map((r, i) =>
      i === row ? r.map((cell, j) => (j === col ? !cell : cell)) : r,
    );
    setSelectedCells(newSelectedCells);
  };

  useEffect(() => {
    checkBingo();
  }, [selectedCells]);

  const isCellInBingoLine = (row: number, col: number) => {
    return bingoLines.some((line) => {
      if (line.startsWith('h') && parseInt(line.slice(1)) === row) return true;
      if (line.startsWith('v') && parseInt(line.slice(1)) === col) return true;
      if (line === 'd1' && row === col) return true;
      if (line === 'd2' && row === size - 1 - col) return true;
      return false;
    });
  };

  return (
    <div className="mx-auto w-full max-w-sm px-1 sm:px-2">
      <div
        className="grid aspect-square gap-0.5 sm:gap-1"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
        }}>
        {board.map((member, idx) => {
          const row = Math.floor(idx / size);
          const col = idx % size;
          const isSelected = selectedCells[row][col];
          const isInBingoLine = isCellInBingoLine(row, col);

          return (
            <BingoCard
              key={`${row}-${col}`}
              row={row}
              col={col}
              member={member}
              isSelected={isSelected}
              isInBingoLine={isInBingoLine}
              toggleCell={toggleCell}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BingoBoard;
