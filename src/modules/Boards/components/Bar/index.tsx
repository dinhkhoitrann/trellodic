import BoardBarView from './view';

type BoardBarProps = {
  board: any;
};

function BoardBar({ board }: BoardBarProps) {
  return <BoardBarView board={board} />;
}

export default BoardBar;
