import { API_ROOT } from '@/utils/constants';

export const addCard = async (cardTitle: string, boardId: string, columnId: string) => {
  const response = await fetch(`${API_ROOT}/api/boards/${boardId}/card`, {
    method: 'POST',
    body: JSON.stringify({ cardTitle, columnId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while adding the card');
    throw error;
  }
};
