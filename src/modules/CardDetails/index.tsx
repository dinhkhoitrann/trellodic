import { useParams } from 'next/navigation';
import CardDetailsView from './view';
import { useQuery } from '@tanstack/react-query';
import { fetchCard } from '@/services/card';

type CardDetailsProps = {
  cardId: string;
};

function CardDetails({ cardId }: CardDetailsProps) {
  const { boardId } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: [cardId],
    queryFn: ({ signal }) => fetchCard({ cardId, boardId: boardId.toString(), signal }),
    staleTime: 3000,
  });

  return <CardDetailsView card={data} isPending={isPending} isError={isError} error={error} />;
}

export default CardDetails;
