import { UserProfileFormValues } from './validation';

export const mapValuesToSubmit = (values: Partial<UserProfileFormValues>) => {
  if (values.birthday) {
    values.birthday = new Date(values.birthday).toISOString();
  }
  return values;
};
