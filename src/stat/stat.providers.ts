import { Stat } from "./stat.model";

export const statProviders = [
  {
    provide: 'STAT_REPOSITORY',
    useValue: Stat
  }
]