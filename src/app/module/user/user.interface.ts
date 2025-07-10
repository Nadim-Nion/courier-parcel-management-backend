export type TRole = 'admin' | 'agent' | 'customer';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TRole;
};
