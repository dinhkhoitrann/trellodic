import FormView from './view';

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Form(props: FormProps) {
  return <FormView {...props} />;
}

export default Form;
