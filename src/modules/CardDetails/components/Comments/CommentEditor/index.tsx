import CommentEditorView from './view';

function CommentEditor() {
  const handleSave = (content: string) => {
    console.log(content);
  };

  return <CommentEditorView onSave={handleSave} />;
}

export default CommentEditor;
