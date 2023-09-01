import BoardContentView from './view';

type BoardContentProps = {
  board: any;
};

function BoardContent({ board }: BoardContentProps) {
  return <BoardContentView board={board} />;
}

export default BoardContent;
