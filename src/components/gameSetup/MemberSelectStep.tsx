import { Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import { MEMBER_LIST } from '@/constants/member';

interface MemberSelectStepProps {
  requiredCount: number;
  selectedMembers: string[];
  onMembersChange: (members: string[]) => void;
}

const MemberSelectStep = ({
  requiredCount,
  selectedMembers,
  onMembersChange,
}: MemberSelectStepProps) => {
  const handleMemberClick = (member: string) => {
    onMembersChange(
      selectedMembers.includes(member)
        ? selectedMembers.filter((m) => m !== member)
        : selectedMembers.length < requiredCount
          ? [...selectedMembers, member]
          : selectedMembers,
    );
  };

  const handleRandomSelect = () => {
    const shuffled = [...MEMBER_LIST].sort(() => Math.random() - 0.5);
    onMembersChange(shuffled.slice(0, requiredCount));
  };

  return (
    <div className="flex h-full flex-col gap-y-2">
      <div className="flex shrink-0 items-center justify-between">
        <label className="text-sm font-medium">
          GN 피플 이름 선택 ({selectedMembers.length}/{requiredCount}명)
        </label>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRandomSelect}
          className="flex items-center gap-1">
          <Shuffle className="h-4 w-4" />
          랜덤으로 선택
        </Button>
      </div>

      <ScrollArea className="h-64 rounded-md border bg-slate-50">
        <div className="grid grid-cols-3 gap-2 p-3">
          {MEMBER_LIST.sort().map((member) => (
            <Button
              key={member}
              variant={selectedMembers.includes(member) ? 'default' : 'outline'}
              size="sm"
              className="w-full"
              onClick={() => handleMemberClick(member)}
              disabled={
                !selectedMembers.includes(member) && selectedMembers.length >= requiredCount
              }>
              {member}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MemberSelectStep;
