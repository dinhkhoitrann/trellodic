import { externalRequest } from '../request';

export const uploadFile = (data: { formData: FormData }) => {
  return externalRequest.post('/upload/cloudinary', data.formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
