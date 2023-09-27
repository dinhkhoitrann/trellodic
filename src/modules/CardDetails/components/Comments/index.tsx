import CommentsView from './view';

function Comments() {
  const handleSave = (content: string) => {
    console.log(content);
  };

  return <CommentsView onSave={handleSave} />;
}

export default Comments;
