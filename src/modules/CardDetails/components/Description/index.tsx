import { useState } from 'react';
import DescriptionView from './view';

function Description() {
  const [editorVisible, setEditorVisible] = useState(false);

  const handleSave = (data: string) => {
    console.log(data);
    setEditorVisible(false);
  };

  const handleShowHideEditor = () => {
    setEditorVisible((prevState) => !prevState);
  };

  return <DescriptionView editorVisible={editorVisible} onSave={handleSave} onShowHideEditor={handleShowHideEditor} />;
}

export default Description;
