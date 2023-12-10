import { FormEventHandler, ReactNode } from 'react';
import { FormProvider as Form } from 'react-hook-form';
import type { UseFormReturn } from 'react-hook-form';

type FormProviderProps = {
  children: ReactNode;
  methods: UseFormReturn<any, any>;
  id?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function FormProvider({ children, id, onSubmit, methods }: FormProviderProps) {
  return (
    <Form {...methods}>
      <form id={id} onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}
