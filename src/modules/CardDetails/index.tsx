import { useEffect } from 'react';
import { useGetCardDetailsQuery } from '@/redux/services/card/card';
import { useAppDispatch } from '@/redux/store';
import { clear } from '@/redux/slices/card';
import CardDetailsView from './view';

type CardDetailsProps = {
  cardId: string;
};

function CardDetails({ cardId }: CardDetailsProps) {
  const { data, isError } = useGetCardDetailsQuery(
    { cardId },
    { pollingInterval: 60000 * 5, refetchOnFocus: true, refetchOnReconnect: true },
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(clear());
    };
  }, [dispatch]);

  if (!data) return <></>;

  return <CardDetailsView card={data} isError={isError} />;
}

export default CardDetails;
