import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getUsersToAddToCard } from '@/services/card/member';
import { BoardGlobalProps, withBoard } from '@/hocs';
import SelectMembersView from './view';
import { UserOption } from '../../type';

type SelectMembersProps = BoardGlobalProps & {
  onChangeMembers: (_params: {
    members?: UserOption[] | undefined;
    selectedRecommendationIds?: string[] | undefined;
  }) => void;
};

function SelectMembers({ cardId, onChangeMembers }: SelectMembersProps) {
  const [options, setOptions] = useState<UserOption[]>([]);

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

  return <SelectMembersView isLoading={isLoading} options={options} onChangeMembers={onChangeMembers} />;
}

export default withBoard(SelectMembers);
