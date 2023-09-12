import OutsideAddCardView from './view';

type OutsideAddCardProps = {
  onShowTextField: () => void;
};

function OutsideAddCard({ onShowTextField }: OutsideAddCardProps) {
  return <OutsideAddCardView onShowTextField={onShowTextField} />;
}

export default OutsideAddCard;
