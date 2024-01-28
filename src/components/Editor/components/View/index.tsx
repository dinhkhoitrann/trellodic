import { forwardRef } from 'react';
import { Box, BoxProps } from '@/components/UIElements';
import Styles from './styles.module.css';

export default forwardRef<HTMLDivElement, BoxProps>(function EditorView(props: BoxProps, ref) {
  return (
    <div className={Styles.data}>
      <Box {...props} ref={ref} />
    </div>
  );
});
