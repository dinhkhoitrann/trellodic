import { externalRequest } from '../request';

export const uploadFile = (data: { formData: FormData }) => {
  return externalRequest.post('http://localhost:8080/api/v1/upload/cloudinary', data.formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
