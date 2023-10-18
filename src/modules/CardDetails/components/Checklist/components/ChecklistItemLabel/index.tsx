import { ChecklistItem } from '@/types/card.type';
import ChecklistItemLabelView from './view';
import { useUpdateTitleChecklistItemMutation } from '@/redux/services/card/checklist';
import { withBoard, BoardGlobalProps } from '@/hocs';

type ChecklistItemLabelProps = BoardGlobalProps & {
  item: ChecklistItem;
  checklistId: string;
};

function ChecklistItemLabel({ checklistId, boardId, cardId, onRefreshCard, ...rest }: ChecklistItemLabelProps) {
  const [editTitleItem] = useUpdateTitleChecklistItemMutation();

  const handleEditItem = (newTitle: string) => {
    editTitleItem({
      itemId: rest.item._id,
      title: newTitle,
      boardId: boardId,
      cardId: cardId,
      checklistId: checklistId,
      onSuccess: onRefreshCard,
    });
  };

  return <ChecklistItemLabelView {...rest} onEdit={handleEditItem} />;
}

export default withBoard(ChecklistItemLabel);
