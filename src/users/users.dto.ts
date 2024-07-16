export type CreateUserDto = {
  email: string;
  password: string;
}

export type UpdateUserDto = {
  email?: string;
  password?: string;
  telegram?: string;
  wallets?: string[];
  role?: string;
  firstName?: string;
  lastName?: string;
}

