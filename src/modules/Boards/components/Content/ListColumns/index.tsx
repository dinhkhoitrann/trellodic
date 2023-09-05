import { Column } from '@/types/column.type';
import ListColumnsView from './view';

type ListColumnsProps = {
  columns: Column[];
};

function ListColumns({ columns }: ListColumnsProps) {
  return <ListColumnsView columns={columns} />;
}

export default ListColumns;
