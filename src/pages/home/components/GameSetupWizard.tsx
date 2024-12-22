import { useState } from 'react';
import { useNavigate } from 'react-router';

import BoardSizeStep from '@/components/gameSetup/BoardSizeStep';
import MemberSelectStep from '@/components/gameSetup/MemberSelectStep';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const GameSetupWizard = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [selectedSize, setSelectedSize] = useState<3 | 4 | 5>(3);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleStart = () => {
    navigate('/game', {
      state: {
        boardSize: selectedSize,
        selectedMembers: selectedMembers, // MemberSelectStep에서 선택한 멤버들
      },
    });
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">게임 설정</CardTitle>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => setCurrentStep(1)}
                  className={
                    currentStep === 1 ? 'font-semibold text-foreground' : 'text-muted-foreground'
                  }>
                  1. 보드 크기
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => setCurrentStep(2)}
                  className={
                    currentStep === 2 ? 'font-semibold text-foreground' : 'text-muted-foreground'
                  }>
                  2. 이름 선택
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </CardHeader>
      <CardContent className="flex h-[380px] flex-col">
        <div className="flex-1">
          {currentStep === 1 ? (
            <BoardSizeStep selectedSize={selectedSize} onSizeSelect={setSelectedSize} />
          ) : (
            <MemberSelectStep
              requiredCount={selectedSize * selectedSize}
              selectedMembers={selectedMembers}
              onMembersChange={setSelectedMembers}
            />
          )}
        </div>

        <div className="mt-6">
          {currentStep === 1 ? (
            <Button size="lg" variant="outline" onClick={handleNext} className="w-full">
              다음
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={handleStart}
              className="w-full"
              disabled={selectedMembers.length !== Math.pow(selectedSize, 2)}>
              게임 시작하기
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GameSetupWizard;
