import { MemberOption } from './type';

export const getMemberOptions = (
  workspaceMembers: MemberOption[] | undefined,
  boardMembers: MemberOption[] | undefined,
) => {
  if (!workspaceMembers || !boardMembers) return [];

  return workspaceMembers?.filter((wsMember) => {
    return !boardMembers?.find((bMember) => bMember._id === wsMember._id);
  });
};
