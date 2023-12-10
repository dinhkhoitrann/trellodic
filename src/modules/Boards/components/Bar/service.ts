import { CHIP_STYLES } from './constants';

export const getChipStyles = (mode: string | undefined) => {
  const textColor = mode === 'dark' ? '#b6c2cf' : 'white';
  return {
    ...CHIP_STYLES,
    color: textColor,
    '.MuiSvgIcon-root': {
      color: textColor,
    },
  };
};
