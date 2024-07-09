export type SignupDto = {
  email: string;
  password: string;
  role?: string;
}

export type SigninDto = {
  email: string;
  password: string;
}