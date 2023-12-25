import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { useAddMembersToCardMutation } from '@/redux/services/card/member';
import { getUsersToAddToCard } from '@/services/card/member';
import MembersView from './view';
import { UserOption } from './type';

function Members({ cardId, onRefreshCard }: BoardGlobalProps) {
  const [options, setOptions] = useState<UserOption[]>([]);
  const [addMembers, { isLoading: isSaving }] = useAddMembersToCardMutation();

  const { mutate: getUserOptions, isPending: isLoading } = useMutation({
    mutationFn: getUsersToAddToCard,
    onSuccess: (data) => {
      setOptions(data);
    },
    onError: () => {
      setOptions([]);
    },
  });

  useEffect(() => {
    if (!cardId) return;
    getUserOptions({ cardId });
  }, [cardId, getUserOptions]);

  const handleAddMember = (userIds: string[]) => {
    addMembers({
      userIds,
      cardId,
      onSuccess: onRefreshCard,
    });
  };

  return <MembersView options={options} isSaving={isSaving} isLoading={isLoading} onAddMember={handleAddMember} />;
}

export default withBoard(Members);
