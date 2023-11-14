import { Notification } from '@/types/noti.type';

export const filterNotiList = (notifs: Notification[], isUnreadMode: boolean) => {
  if (!isUnreadMode) return notifs;
  return getUnreadNotifs(notifs);
};

export const getUnreadNotifs = (notifs: Notification[]) => {
  return notifs.filter((noti) => noti.isRead === false);
};
