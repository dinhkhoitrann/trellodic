export interface User {
  readonly _id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  phoneNumber: string;
  birthday: Date;
  gender: string;
}
