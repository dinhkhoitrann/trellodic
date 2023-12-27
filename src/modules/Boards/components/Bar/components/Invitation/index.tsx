import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import { BoardGlobalProps, withBoard } from '@/hocs';
import InvitationView, { InvitationViewRef } from './view';
import { getMemberOptions } from './service';
import { MemberOption } from './type';
import { useAddMembersToBoardMutation } from '@/redux/services/board/member';
import { User } from '@/types/user.type';

function Invitation({ boardId, onRefreshBoard }: BoardGlobalProps) {
  const workspace = useAppSelector(selectWorkspaceDetails);

  const { data: boardMembersResponse } = useQuery({
    queryKey: ['Board_Members'],
  });

  const [invite, { isLoading: isInviting }] = useAddMembersToBoardMutation();

  const viewRef = useRef<InvitationViewRef>(null);
  const memberOptions = getMemberOptions(workspace.members as User[], (boardMembersResponse as any)?.data);

  const handleInviteMembers = (members: MemberOption[]) => {
    const userIds = members.map((member) => member._id);
    const onSuccess = () => {
      toast.success('Invited members successfully');
      viewRef.current?.onClose();
      viewRef.current?.clearSelections();
      onRefreshBoard();
    };

    invite({ userIds, boardId, onSuccess });
  };

  return (
    <InvitationView ref={viewRef} isInviting={isInviting} members={memberOptions} onInvite={handleInviteMembers} />
  );
}

export default withBoard(Invitation);
