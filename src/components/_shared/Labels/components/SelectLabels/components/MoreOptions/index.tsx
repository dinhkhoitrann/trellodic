import { Label } from '@/types/board.type';
import MoreOptionsView from './view';
import { useRemoveLabelMutation } from '@/redux/services/board/label';
import { BoardGlobalProps, withBoard } from '@/hocs';

type MoreOptionsProps = BoardGlobalProps & {
  label: Label;
  onEditMode: () => void;
};

function MoreOptions({ label, cardId, onEditMode, onRefreshBoard, onRefreshCard }: MoreOptionsProps) {
  const [deleteLabel] = useRemoveLabelMutation();

  const handleDeleteLabel = () => {
    deleteLabel({
      labelId: label._id,
      cardId,
      onSuccess: () => {
        onRefreshBoard();
        if (cardId) onRefreshCard();
      },
    });
  };

  return <MoreOptionsView onEditMode={onEditMode} onDeleteLabel={handleDeleteLabel} />;
}

export default withBoard(MoreOptions);
