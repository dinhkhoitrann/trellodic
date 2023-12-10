import * as Yup from 'yup';

export interface FilterDefaultValues {
  label?: string[];
}

export const FilterSchema = Yup.object().shape({
  label: Yup.array().typeError('Labels is invalid'),
});

export const defaultValues: FilterDefaultValues = {
  label: [],
};
