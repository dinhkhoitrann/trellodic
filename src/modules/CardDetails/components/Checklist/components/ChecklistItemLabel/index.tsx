import { ChecklistItem } from '@/types/card.type';
import ChecklistItemLabelView from './view';
import { useUpdateChecklistItemMutation } from '@/redux/services/card/checklist';
import { withBoard, BoardGlobalProps } from '@/hocs';

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
