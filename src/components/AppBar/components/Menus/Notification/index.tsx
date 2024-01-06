import { createContext, useContext, useEffect, useState } from 'react';
import openSocket from 'socket.io-client';
import { RefetchOptions, useQuery } from '@tanstack/react-query';
import { getNotifs } from '@/services/notification';
import { Notification as NotificationType } from '@/types/noti.type';
import { BE_API_ROOT } from '@/utils/constants';
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
    staleTime: 60 * 1000,
    refetchOnMount: true,
    refetchInterval: 60 * 1000,
    notifyOnChangeProps: ['data'],
  });

  useEffect(() => {
    const socket = openSocket(BE_API_ROOT, { retries: 1, reconnectionAttempts: 1 });
    socket.on('notifs', () => {
      refetch();
    });
  }, [refetch]);

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
