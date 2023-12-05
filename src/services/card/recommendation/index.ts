import { User } from '@/types/user.type';

export const getMemberRecommendations = ({ cardId }: { cardId: string }): Promise<Pick<User, '_id' | 'name'>[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          _id: '655497333b7dba7af3972bd3',
          name: 'Khôi Trần 111 222',
        },
        {
          _id: '655497333b7dba7af3972bd2',
          name: 'Khôi Trần aaa zzz',
        },
      ]);
    }, 500);
  });
};
