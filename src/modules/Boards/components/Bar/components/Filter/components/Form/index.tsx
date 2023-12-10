import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormView from './view';
import { FilterDefaultValues, FilterSchema, defaultValues } from './validation';

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Form(props: FormProps) {
  const methods = useForm({
    resolver: yupResolver(FilterSchema),
    defaultValues,
  });

  const handleSubmit = (values: FilterDefaultValues) => {
    console.log(values);
  };

  return <FormView {...props} methods={methods} onSubmit={handleSubmit} />;
}

export default Form;
