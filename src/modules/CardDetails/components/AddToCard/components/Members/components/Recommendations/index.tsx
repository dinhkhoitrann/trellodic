import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getMemberRecommendations } from '@/services/card/recommendation';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { User } from '@/types/user.type';
import RecommendationsView from './view';
import { mapRecommendationsToState } from './service';

type RecommendationsProps = BoardGlobalProps & {
  onSelectRecommendations: (_params: { members?: undefined; selectedRecommendationIds?: string[] }) => void;
};

function Recommendations({ cardId, onSelectRecommendations }: RecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Pick<User, '_id' | 'name'>[]>();
  const [recommendVisible, setRecommendVisible] = useState(false);
  const [data, setData] = useState(mapRecommendationsToState(recommendations || []));

  const handleSelectRecommendations = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = {
      ...data,
      [event.target.name]: event.target.checked,
    };
    setData(updatedData);

    const selectedRecommendationIds = Object.keys(updatedData).filter(
      (key) => updatedData[key as keyof typeof updatedData],
    );
    onSelectRecommendations({ selectedRecommendationIds });
  };

  const { mutate: getRecommendations, isPending } = useMutation({
    mutationFn: getMemberRecommendations,
    onSuccess: (data) => {
      setRecommendations(data);
    },
  });

  const handleRecommendationVisibility = () => {
    setRecommendVisible(!recommendVisible);
    if (recommendations) return;
    getRecommendations({ cardId });
  };

  return (
    <RecommendationsView
      recommendVisible={recommendVisible}
      recommendations={recommendations}
      isLoading={isPending}
      data={data}
      onRecommendationVisible={handleRecommendationVisibility}
      onChange={handleSelectRecommendations}
    />
  );
}

export default withBoard(Recommendations);
