import * as Yup from 'yup';

export interface FilterDefaultValues {
  labels?: string[];
}

export const FilterSchema = Yup.object().shape({
  labels: Yup.array().typeError('Labels is invalid'),
});

export const defaultValues: FilterDefaultValues = {
  labels: [],
};
