import { useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';

type ColorsProps = {
  selectedColor: string;
  onSelect: (_color: string) => void;
};

function Colors({ selectedColor, onSelect }: ColorsProps) {
  const [color, setColor] = useState(selectedColor);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onSelect(newColor);
  };

  return <HexAlphaColorPicker color={color} onChange={handleColorChange} />;
}

export default Colors;
