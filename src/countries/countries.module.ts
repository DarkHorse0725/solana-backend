import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { countryProviders } from './countries.providers';

@Module({
  providers: [CountriesService, ...countryProviders],
  controllers: [CountriesController],
  exports: [CountriesService]
})
export class CountriesModule {}
