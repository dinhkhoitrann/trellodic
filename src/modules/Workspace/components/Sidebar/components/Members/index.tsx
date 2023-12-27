import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getUsersToAddToWorkspace } from '@/services/workspace';
import { useDebounce } from '@/hooks';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import MembersView from './view';
import { UserOption } from './type';
import { useInviteUsersMutation } from '@/redux/services/workspace/workspace';

function Members() {
  const [options, setOptions] = useState<UserOption[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<UserOption[]>([]);
  const [query, setQuery] = useState('');
  const workspace = useAppSelector(selectWorkspaceDetails);

  const { mutate: searchUsers, isPending: isSearching } = useMutation({
    mutationFn: getUsersToAddToWorkspace,
    onSuccess: (data) => {
      setOptions(data);
    },
    onError: () => {
      setOptions([]);
    },
  });

  const [inviteUsers, { isLoading: isInviting }] = useInviteUsersMutation();

  const debouncedQuery = useDebounce(query, 500);
  useEffect(() => {
    if (!debouncedQuery.trim()) return;
    searchUsers({ workspaceId: workspace._id!, email: debouncedQuery });
  }, [debouncedQuery, workspace._id, searchUsers]);

  const handleQueryChange = (enteredQuery: string) => {
    setQuery(enteredQuery);
  };

  const handleSelectUsers = (users: UserOption[]) => {
    setSelectedUsers(users);
  };

  const handleInviteUsers = (onSuccess: () => void) => {
    const userIds = selectedUsers.map((user) => user._id);
    inviteUsers({
      workspaceId: workspace._id!,
      userIds,
      onSuccess: () => {
        onSuccess();
        setSelectedUsers([]);
        toast.success('Invited users successfully');
      },
    });
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
