import { useState } from 'react';
import { useEditDescriptionMutation } from '@/redux/services/card/description';
import { BoardGlobalProps, withBoard } from '@/hocs';
import DescriptionView from './view';

function Description({ boardId, cardId, card, onRefreshCard }: BoardGlobalProps) {
  const [editorVisible, setEditorVisible] = useState(false);
  const [editDescription, { isLoading }] = useEditDescriptionMutation();

  const handleSave = async (data: string) => {
    await editDescription({
      content: data,
      boardId,
      cardId,
      onSuccess: () => {
        onRefreshCard();
        setEditorVisible(false);
      },
    });
  };

  const handleShowHideEditor = () => {
    setEditorVisible((prevState) => !prevState);
  };

  return (
    <DescriptionView
      card={card}
      editorVisible={editorVisible}
      isLoading={isLoading}
      onSave={handleSave}
      onShowHideEditor={handleShowHideEditor}
    />
  );
}

export default withBoard(Description);
