import { useRef } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import { getWorkspaceMembers } from '@/services/workspace';
import { inviteMembers } from '@/services/board';
import { User } from '@/types/user.type';
import InvitationView, { InvitationViewRef } from './view';

function Invitation() {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const { data: response, isLoading } = useQuery({
    queryKey: ['workspaces', workspace._id],
    queryFn: () => getWorkspaceMembers({ workspaceId: workspace._id }),
    staleTime: 3000,
  });

  const { mutate: invite, isPending: isInviting } = useMutation({
    mutationFn: inviteMembers,
    onSuccess: () => {
      toast.success('Invited members successfully');
      viewRef.current?.onClose();
    },
    onError: () => {
      toast.error('Failed to invite members');
    },
  });

  const viewRef = useRef<InvitationViewRef>(null);

  const handleInviteMembers = (members: Partial<User>[]) => {
    const memberIds = members.map((member) => member._id || '');
    invite({ memberIds });
  };

  return (
    <InvitationView
      ref={viewRef}
      isFetching={isLoading}
      isInviting={isInviting}
      members={response?.data.members || []}
      onInvite={handleInviteMembers}
    />
  );
}

export default Invitation;
