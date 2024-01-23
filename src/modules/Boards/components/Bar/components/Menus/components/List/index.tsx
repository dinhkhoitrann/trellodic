import ListView from './view';

type ListProps = {
  isOpen: boolean;
  onClose: () => void;
};

function List(props: ListProps) {
  return <ListView {...props} />;
}

export default List;
