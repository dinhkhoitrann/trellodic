import { useState } from 'react';
import ColumnView from './view';

type ColumnProps = {
  column: any;
};

function Column({ column }: ColumnProps) {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <ColumnView column={column} anchorEl={anchorEl} onClick={handleClick} onClose={handleClose} />;
}

export default Column;
