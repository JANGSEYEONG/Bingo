'use client';

import Confetti from 'react-confetti';

const ConfettiDecoration = () => {
  const { height } = window.screen;
  return (
    <div>
      <Confetti width={512} height={height} gravity={0.2} />
    </div>
  );
};

export default ConfettiDecoration;
