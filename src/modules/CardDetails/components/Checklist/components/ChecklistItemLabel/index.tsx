import { ChecklistItem } from '@/types/card.type';
import ChecklistItemLabelView from './view';

type ChecklistItemLabelProps = {
  item: ChecklistItem;
};

function ChecklistItemLabel(props: ChecklistItemLabelProps) {
  const handleEditItem = (newTitle: string) => {
    console.log(newTitle);
  };

  return <ChecklistItemLabelView {...props} onEdit={handleEditItem} />;
}

export default ChecklistItemLabel;
