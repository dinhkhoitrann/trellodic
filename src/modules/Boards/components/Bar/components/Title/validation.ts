import * as Yup from 'yup';

export interface TitleDefaultValues {
  title: string;
}

export const BoardTitleSchema = Yup.object().shape({
  title: Yup.string().trim().required('Board title is required'),
});
