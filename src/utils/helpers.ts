export const getMemberRole = (memberId: string, userId: string, adminId: string) => {
  if (memberId === userId && memberId === adminId) {
    return 'You, Admin';
  }

  if (memberId === userId) {
    return 'You';
  }

  if (memberId === adminId) {
    return 'Admin';
  }

  return 'Member';
};
