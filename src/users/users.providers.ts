import { User } from "./users.model";


export const userProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User
  }
]