import { ChangeEvent } from 'react';
import SelectLabelsView from './view';
import { Label } from '@/types/board.type';
import { useAddLabelToCardMutation, useRemoveLabelMutation } from '@/redux/services/board/label';
import { withBoard, BoardGlobalProps } from '@/hocs';

type SelectLabelsProps = BoardGlobalProps & {
  onEditMode: (_label: Label) => void;
};

function SelectLabels({ cardId, onRefreshCard, onEditMode }: SelectLabelsProps) {
  const [addLabelToCard] = useAddLabelToCardMutation();
  const [removeLabelFromCard] = useRemoveLabelMutation();

  const handleSelectedLabelsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    if (checked) {
      addLabelToCard({ labelId: event.target.name, cardId, onSuccess: onRefreshCard });
      return;
    }

    removeLabelFromCard({ labelId: event.target.name, cardId, onSuccess: onRefreshCard });
  };

  return <SelectLabelsView onSelectedLabelsChange={handleSelectedLabelsChange} onEditMode={onEditMode} />;
}

export default withBoard(SelectLabels);
