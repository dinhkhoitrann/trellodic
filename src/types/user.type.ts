export interface User {
  readonly _id: string;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  phoneNumber: string;
  birthday: string;
  gender?: string;
  isVerified: boolean;
  type: string;
  createdAt?: string;
  updatedAt?: string;
}
