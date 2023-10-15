import CreateFormView from './view';

type CreateFormProps = {
  onClose: () => void;
};

function CreateForm(props: CreateFormProps) {
  return <CreateFormView {...props} />;
}

export default CreateForm;
