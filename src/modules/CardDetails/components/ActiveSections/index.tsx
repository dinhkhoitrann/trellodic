import { Card } from '@/types/card.type';
import ActiveSectionsView from './view';

type ActiveSectionsProps = {
  card?: Card;
};

function ActiveSections({ card }: ActiveSectionsProps) {
  return <ActiveSectionsView card={card} />;
}

export default ActiveSections;
