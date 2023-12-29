import { Label } from '@/types/board.type';
import MoreOptionsView from './view';
import { useRemoveLabelMutation } from '@/redux/services/board/label';
import { BoardGlobalProps, withBoard } from '@/hocs';

type MoreOptionsProps = BoardGlobalProps & {
  label: Label;
  onEditMode: () => void;
};

function MoreOptions({ label, onEditMode, onRefreshBoard }: MoreOptionsProps) {
  const [deleteLabel] = useRemoveLabelMutation();

  const handleDeleteLabel = () => {
    deleteLabel({ labelId: label._id, onSuccess: onRefreshBoard });
  };

  return <MoreOptionsView onEditMode={onEditMode} onDeleteLabel={handleDeleteLabel} />;
}

export default withBoard(MoreOptions);
