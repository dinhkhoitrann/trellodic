import { User } from '@/types/user.type';

export const mapRecommendationsToState = (recommendations: Pick<User, '_id' | 'name'>[]) => {
  return recommendations.reduce((results, curReccommendation) => {
    return {
      ...results,
      [curReccommendation._id]: false,
    };
  }, {});
};
