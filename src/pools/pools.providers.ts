import { Pool } from "./pools.model";


export const poolProviders = [
  {
    provide: 'POOLS_REPOSITORY',
    useValue: Pool
  }
]