import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Tooltip,
  Typography,
} from '@/components/UIElements';
import { User } from '@/types/user.type';
import { Card } from '@/types/card.type';
import { useView } from '@/hooks';

type RecommendationsViewProps = {
  recommendVisible: boolean;
  recommendations: Pick<User, '_id' | 'name'>[] | undefined;
  data: {};
  card: Card;
  isLoading: boolean;
  onRecommendationVisible: () => void;
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
};

function RecommendationsView({
  recommendVisible,
  recommendations = [],
  isLoading,
  data,
  card,
  onRecommendationVisible,
  onChange,
}: RecommendationsViewProps) {
  const view = useView({ data: recommendations, isLoading });

  const renderRecommendations = () => {
    if (!recommendVisible) return;

    if (view) return view;

    if (recommendations.length === 0) {
      return <Typography sx={{ textAlign: 'center', my: 3 }}>No recommendations found</Typography>;
    }

    return (
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{ my: 2 }}>
          From the current skills of the card, these members might be good candidates to join
        </FormLabel>
        <FormGroup>
          {recommendations.map((recommendation) => (
            <FormControlLabel
              key={recommendation._id}
              control={
                <Checkbox
                  checked={data[recommendation._id as keyof typeof data] || false}
                  onChange={onChange}
                  name={recommendation._id}
                />
              }
              label={recommendation.name}
            />
          ))}
        </FormGroup>
      </FormControl>
    );
  };

  return (
    <Box sx={{ my: 1 }}>
      <Tooltip title={card.isDone && 'You can not recommend for completed card'} arrow placement="top">
        <div style={{ display: 'inline-block' }}>
          <Button sx={{ mb: 2 }} onClick={onRecommendationVisible} disabled={card.isDone}>
            {recommendVisible ? 'Hide recommend' : 'Recommend'}
          </Button>
        </div>
      </Tooltip>

      {renderRecommendations()}
    </Box>
  );
}

export default RecommendationsView;
