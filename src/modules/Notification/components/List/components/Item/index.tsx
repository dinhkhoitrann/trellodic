import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { markNotiAsRead } from '@/services/notification';
import { useNotiContext } from '@/modules/Notification';
import { Notification } from '@/types/noti.type';
import NotiItemView from './view';

type NotiItemProps = {
  noti: Notification;
};

function NotiItem({ noti }: NotiItemProps) {
  const { refetch } = useNotiContext();
  const { mutate: markAsRead } = useMutation({
    mutationFn: markNotiAsRead,
    onSuccess: () => {
      refetch();
    },
    onError: () => {
      toast.error('Something went wrong, please try again');
    },
  });

  const handleMarkAsRead = (notiId: string) => {
    markAsRead({ notiId });
  };

  return <NotiItemView noti={noti} onMarkAsRead={handleMarkAsRead} />;
}

export default NotiItem;
