import { ChecklistItem } from '@/types/card.type';
import ChecklistItemLabelView from './view';
import { useUpdateTitleChecklistItemMutation } from '@/redux/services/card/checklist';
import withBoard from '@/hocs/withBoard';

type ChecklistItemLabelProps = {
  item: ChecklistItem;
  checklistId: string;
  boardId: string;
  cardId: string;
  onRefreshCard: () => void;
};

function ChecklistItemLabel({ checklistId, boardId, cardId, onRefreshCard, ...rest }: ChecklistItemLabelProps) {
  const [editTitleItem] = useUpdateTitleChecklistItemMutation();

  const handleEditItem = async (newTitle: string) => {
    await editTitleItem({
      itemId: rest.item._id,
      title: newTitle,
      boardId: boardId,
      cardId: cardId,
      checklistId: checklistId,
    });
    onRefreshCard();
  };

  return <ChecklistItemLabelView {...rest} onEdit={handleEditItem} />;
}

export default withBoard(ChecklistItemLabel);
