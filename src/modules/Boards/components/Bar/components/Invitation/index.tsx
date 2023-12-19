import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import { getWorkspaceMembers } from '@/services/workspace';
import { BoardGlobalProps, withBoard } from '@/hocs';
import InvitationView, { InvitationViewRef } from './view';
import { getMemberOptions } from './service';
import { MemberOption } from './type';
import { useAddMembersToBoardMutation } from '@/redux/services/board/member';

function Invitation({ onRefreshBoard }: BoardGlobalProps) {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const { data: workspaceMembersResponse, isLoading } = useQuery({
    queryKey: ['workspaces', workspace._id],
    queryFn: () => getWorkspaceMembers({ workspaceId: workspace._id }),
    staleTime: 3000,
  });

  const { data: boardMembersResponse } = useQuery({
    queryKey: ['Board_Members'],
  });

  const [invite, { isLoading: isInviting }] = useAddMembersToBoardMutation();

  const viewRef = useRef<InvitationViewRef>(null);
  const memberOptions = getMemberOptions(workspaceMembersResponse?.members, (boardMembersResponse as any)?.data);

  const handleInviteMembers = (members: MemberOption[]) => {
    const memberIds = members.map((member) => member._id);
    const onSuccess = () => {
      toast.success('Invited members successfully');
      viewRef.current?.onClose();
      viewRef.current?.clearSelections();
      onRefreshBoard();
    };

    invite({ memberIds, onSuccess });
  };

  return (
    <InvitationView
      ref={viewRef}
      isFetching={isLoading}
      isInviting={isInviting}
      members={memberOptions}
      onInvite={handleInviteMembers}
    />
  );
}

export default withBoard(Invitation);
