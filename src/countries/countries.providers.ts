import { Country } from "./countries.model";


export const countryProviders = [
  {
    provide: 'COUNTRY_REPOSITORY',
    useValue: Country
  }
]