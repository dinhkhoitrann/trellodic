import { ChecklistItem } from '@/types/card.type';
import { useUpdateChecklistItemMutation } from '@/redux/services/card/checklist';
import { withBoard, BoardGlobalProps } from '@/hocs';
import ChecklistItemLabelView from './view';

type ChecklistItemLabelProps = BoardGlobalProps & {
  item: ChecklistItem;
  checklistId: string;
};

function ChecklistItemLabel({ item, checklistId, cardId, onRefreshCard }: ChecklistItemLabelProps) {
  const [editTitleItem] = useUpdateChecklistItemMutation();

  const handleEditItem = (title: string) => {
    editTitleItem({
      itemId: item._id,
      title,
      cardId,
      checklistId,
      onSuccess: onRefreshCard,
    });
  };

  return <ChecklistItemLabelView item={item} onEdit={handleEditItem} />;
}

export default withBoard(ChecklistItemLabel);
