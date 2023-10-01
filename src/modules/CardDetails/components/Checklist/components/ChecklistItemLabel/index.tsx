import { ChecklistItem } from '@/types/card.type';
import ChecklistItemLabelView from './view';
import { useParams, useSearchParams } from 'next/navigation';
import { useUpdateTitleChecklistItemMutation } from '@/redux/services/card';

type ChecklistItemLabelProps = {
  item: ChecklistItem;
  checklistId: string;
};

function ChecklistItemLabel({ checklistId, ...rest }: ChecklistItemLabelProps) {
  const { boardId } = useParams();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');
  const [editTitleItem] = useUpdateTitleChecklistItemMutation();

  const handleEditItem = (newTitle: string) => {
    editTitleItem({
      itemId: rest.item._id,
      title: newTitle,
      boardId: boardId.toString(),
      cardId: cardId!,
      checklistId: checklistId,
    });
  };

  return <ChecklistItemLabelView {...rest} onEdit={handleEditItem} />;
}

export default ChecklistItemLabel;
