import EditCLNameView from './view';

type EditCLNameProps = {
  currentName: string;
  onClose: () => void;
};

function EditCLName(props: EditCLNameProps) {
  const handleEdit = (newName: string) => {
    console.log(newName);
  };

  return <EditCLNameView {...props} onEdit={handleEdit} />;
}

export default EditCLName;
