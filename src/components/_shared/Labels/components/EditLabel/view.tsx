import { useRef } from 'react';
import { TextField, Typography, Button } from '@/components/UIElements';
import { Label } from '@/types/board.type';
import Colors from '@/components/Colors';
import { colors } from '../../../../../modules/CardDetails/components/AddToCard/components/Labels/constants';

type EditLabelViewProps = {
  label?: Label;
  isPending: boolean;
  selectedColor: string;
  onSelectColorChange: (_color: string) => void;
  onEdit: (_title: string, _color: string) => void;
};

function EditLabelView({ label, isPending, selectedColor, onSelectColorChange, onEdit }: EditLabelViewProps) {
  const titleRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    onEdit(titleRef.current?.value || '', selectedColor);
  };

  return (
    <>
      <TextField
        inputRef={titleRef}
        defaultValue={label?.title}
        fullWidth
        size="small"
        placeholder="Title"
        sx={{ marginTop: '20px' }}
      />
      <Typography sx={{ my: 2 }}>Select a color</Typography>
      <Colors colors={colors} selectedColor={selectedColor} onSelect={onSelectColorChange} />
      <Button variant="contained" disabled={isPending} sx={{ mt: 2 }} onClick={handleEdit}>
        {isPending ? 'Editing...' : 'Edit'}
      </Button>
    </>
  );
}

export default EditLabelView;
