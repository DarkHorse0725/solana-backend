import { Inject, Injectable } from '@nestjs/common';
import { Country } from './countries.model';
import { CreateCountryDto } from './countriesDto';

@Injectable()
export class CountriesService {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private countries: typeof Country
  ){}

  createMany(countries: CreateCountryDto[] ): Promise<Country[]>  {
    return this.countries.bulkCreate(countries);
  }

  findCountries(): Promise<Country[]> {
    return this.countries.findAll();
  }
}
