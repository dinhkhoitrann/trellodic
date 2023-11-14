/* eslint-disable indent */
import { createContext, useContext, useState } from 'react';
import { RefetchOptions, useQuery } from '@tanstack/react-query';
import { getNotifs } from '@/services/notification';
import { Notification as NotificationType } from '@/types/noti.type';
import NotificationView from './view';

const NotificationViewModeContext = createContext({
  notifs: [] as NotificationType[],
  isUnreadMode: true,
  setIsUnreadMode: (_isUnreadMode: boolean) => {},
  refetch: (_options?: RefetchOptions | undefined) => {},
});

function Notification() {
  const [isUnreadMode, setIsUnreadMode] = useState(true);
  const { data, refetch } = useQuery({
    queryKey: ['Notifs'],
    queryFn: () => getNotifs(),
    staleTime: 3000,
    refetchOnMount: true,
    refetchInterval: 60 * 1000,
    notifyOnChangeProps: ['data'],
  });

  return (
    <NotificationViewModeContext.Provider value={{ notifs: data || [], isUnreadMode, setIsUnreadMode, refetch }}>
      <NotificationView />
    </NotificationViewModeContext.Provider>
  );
}

export default Notification;

export const useNotiContext = () => {
  return useContext(NotificationViewModeContext);
};
