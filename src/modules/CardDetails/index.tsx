import { useGetCardDetailsQuery } from '@/redux/services/card/card';
import CardDetailsView from './view';

type CardDetailsProps = {
  cardId: string;
};

function CardDetails({ cardId }: CardDetailsProps) {
  const { data, error, isFetching, isError } = useGetCardDetailsQuery(
    { cardId },
    { pollingInterval: 60000 * 5, refetchOnFocus: true, refetchOnReconnect: true },
  );

  if (!data) return <></>;

  return <CardDetailsView card={data} isPending={isFetching} isError={isError} error={error} />;
}

export default CardDetails;
