import { useState } from 'react';
import { BoardGlobalProps, withBoard } from '@/hocs';
import DescriptionView from './view';
import { useEditCardMutation } from '@/redux/services/card/card';

function Description({ cardId, card, onRefreshCard }: BoardGlobalProps) {
  const [editorVisible, setEditorVisible] = useState(false);
  const [editDescription, { isLoading }] = useEditCardMutation();

  const handleSave = (data: string) => {
    editDescription({
      cardId,
      description: data,
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
