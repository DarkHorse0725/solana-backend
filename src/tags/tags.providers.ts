import { Tag } from "./tags.model";


export const tagProviders = [
  {
    provide: 'TAG_REPOSITORY',
    useValue: Tag
  }
]