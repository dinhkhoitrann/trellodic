import { externalRequest } from '../request';

export const uploadFile = async (data: { formData: FormData }) => {
  const res = await externalRequest.post('http://localhost:8080/api/v1/upload/cloudinary', data.formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
