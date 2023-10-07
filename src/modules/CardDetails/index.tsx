import { useParams } from 'next/navigation';
import { useGetCardDetailsQuery } from '@/redux/services/card/card';
import CardDetailsView from './view';

type CardDetailsProps = {
  cardId: string;
};

function CardDetails({ cardId }: CardDetailsProps) {
  const { boardId } = useParams();
  const { data, error, isFetching, isError } = useGetCardDetailsQuery(
    { cardId, boardId: boardId.toString() },
    { pollingInterval: 60000 * 5, refetchOnFocus: true, refetchOnReconnect: true },
  );
  console.log('re-render card details');

  if (!data) return <></>;

  return <CardDetailsView card={data} isPending={isFetching} isError={isError} error={error} />;
}

export default CardDetails;
