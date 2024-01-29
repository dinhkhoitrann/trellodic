import { FormEventHandler, PropsWithChildren } from 'react';
import { FormProvider as Form } from 'react-hook-form';
import type { UseFormReturn } from 'react-hook-form';

type FormProviderProps = {
  methods: UseFormReturn<any, any>;
  id?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function FormProvider({ children, id, onSubmit, methods }: PropsWithChildren<FormProviderProps>) {
  return (
    <Form {...methods}>
      <form id={id} onSubmit={onSubmit} style={{ width: '100%' }}>
        {children}
      </form>
    </Form>
  );
}
