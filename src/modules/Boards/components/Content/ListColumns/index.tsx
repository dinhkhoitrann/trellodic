import { mapOrder } from '@/utils/sort';
import ListColumnsView from './view';

type ListColumnsProps = {
  columns: any;
  columnOrderIds: string[];
};

function ListColumns({ columns, columnOrderIds }: ListColumnsProps) {
  const orderedColumns = mapOrder(columns, columnOrderIds, '_id');
  return <ListColumnsView columns={orderedColumns} />;
}

export default ListColumns;
