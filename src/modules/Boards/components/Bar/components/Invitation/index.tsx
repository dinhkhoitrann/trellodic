import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import { BoardGlobalProps, withBoard } from '@/hocs';
import InvitationView, { InvitationViewRef } from './view';
import { getMemberOptions } from './service';
import { MemberOption } from './type';
import { useAddMembersToBoardMutation, useGetMembersQuery } from '@/redux/services/board/member';
import { User } from '@/types/user.type';

function Invitation({ boardId, onRefreshBoard }: BoardGlobalProps) {
  const workspace = useAppSelector(selectWorkspaceDetails);

  const { data: members } = useGetMembersQuery({ boardId });

  const [invite, { isLoading: isInviting }] = useAddMembersToBoardMutation();

  const viewRef = useRef<InvitationViewRef>(null);
  const memberOptions = getMemberOptions(workspace.members as User[], members);

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
