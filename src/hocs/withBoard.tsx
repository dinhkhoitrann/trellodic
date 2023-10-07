import { ComponentType } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectBoardDetails } from '@/redux/slices/board';
import { Board } from '@/types/board.type';
import { Card } from '@/types/card.type';
import { selectCardDetails } from '@/redux/slices/card';

export type BoardGlobalProps = {
  boardId: string;
  cardId: string;
  board: Board;
  card: Card;
  onRefreshCard: () => void;
  onRefreshBoard: () => void;
};

export default function withBoard<T>(Component: ComponentType<T>) {
  const WithBoardComponent = (
    props: Omit<T, 'boardId' | 'cardId' | 'board' | 'card' | 'onRefreshCard' | 'onRefreshBoard'>,
  ) => {
    const { boardId } = useParams();
    const searchParams = useSearchParams();
    const cardId = searchParams.get('cardId');
    const dispatch = useAppDispatch();
    const board = useAppSelector(selectBoardDetails);
    const card = useAppSelector(selectCardDetails);

    const handleRefreshCard = () => {
      dispatch({
        type: 'cardApi/invalidateTags',
        payload: [{ type: 'Card', id: cardId }],
      });
    };

    const handleRefreshBoard = () => {
      dispatch({
        type: 'boardApi/invalidateTags',
        payload: [{ type: 'Board', id: boardId.toString() }],
      });
    };

    return (
      <Component
        {...(props as T)}
        boardId={boardId.toString()}
        board={board}
        cardId={cardId!}
        card={card}
        onRefreshCard={handleRefreshCard}
        onRefreshBoard={handleRefreshBoard}
      />
    );
  };

  return WithBoardComponent;
}
