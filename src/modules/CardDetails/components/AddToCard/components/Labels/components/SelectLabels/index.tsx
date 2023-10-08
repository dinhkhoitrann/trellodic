import { ChangeEvent } from 'react';
import SelectLabelsView from './view';
import { Label } from '@/types/board.type';
import { useAddLabelToCardMutation } from '@/redux/services/board/label';
import { withBoard, BoardGlobalProps } from '@/hocs';

type SelectLabelsProps = BoardGlobalProps & {
  onEditMode: (_label: Label) => void;
};

function SelectLabels({ cardId, onRefreshCard, onEditMode }: SelectLabelsProps) {
  const [addLabelToCard] = useAddLabelToCardMutation();

  const handleSelectedLabelsChange = (event: ChangeEvent<HTMLInputElement>) => {
    addLabelToCard({ labelId: event.target.name, isAdded: event.target.checked, cardId, onSuccess: onRefreshCard });
  };

  return <SelectLabelsView onSelectedLabelsChange={handleSelectedLabelsChange} onEditMode={onEditMode} />;
}

export default withBoard(SelectLabels);
