import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { searchUsersBy } from '@/services/search';
import { inviteUsers } from '@/services/workspace';
import { useDebounce } from '@/hooks';
import MembersView from './view';
import { UserOption } from './type';

function Members() {
  const [options, setOptions] = useState<UserOption[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<UserOption[]>([]);
  const [query, setQuery] = useState('');

  const { mutate: searchUsers, isPending: isSearching } = useMutation({
    mutationFn: searchUsersBy,
    onSuccess: (data) => {
      setOptions(data);
    },
    onError: () => {
      setOptions([]);
    },
  });

  const { mutate: invite, isPending: isInviting } = useMutation({
    mutationFn: inviteUsers,
  });

  const debouncedQuery = useDebounce(query, 500);
  useEffect(() => {
    if (!debouncedQuery.trim()) return;
    searchUsers({ email: debouncedQuery });
  }, [debouncedQuery, searchUsers]);

  const handleQueryChange = (enteredQuery: string) => {
    setQuery(enteredQuery);
  };

  const handleSelectUsers = (users: UserOption[]) => {
    setSelectedUsers(users);
  };

  const handleInviteUsers = (onSuccess: () => void) => {
    const userIds = selectedUsers.map((user) => user._id);
    invite(
      { userIds },
      {
        onSuccess: () => {
          onSuccess();
          setSelectedUsers([]);
          toast.success('Invited users successfully');
        },
      },
    );
  };

  return (
    <MembersView
      options={options}
      selectedUsers={selectedUsers}
      isSearching={isSearching}
      isInviting={isInviting}
      onQueryChange={handleQueryChange}
      onSelectUsers={handleSelectUsers}
      onInvite={handleInviteUsers}
    />
  );
}

export default Members;
