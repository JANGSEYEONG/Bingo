const Rules = () => {
  return (
    <div className="rounded-lg bg-muted p-4 text-sm">
      <p className="mb-2 font-semibold">게임 룰 💡</p>
      <ul className="list-inside list-disc space-y-1 text-muted-foreground">
        <li>GN인들의 이름을 선택하거나 랜덤으로 배정해요</li>
        <li>3빙고를 완성하면 승리예요!</li>
        <li>빙고가 완성되면 큰 소리로 "빙고!" 외쳐주세요~</li>
      </ul>
    </div>
  );
};

export default Rules;
