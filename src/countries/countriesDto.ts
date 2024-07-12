export type CreateCountryDto = {
  name: string;
  alpha2: string;
  countryCode: string;
  iso31662: string;
  region: string;
  regionCode: string;
  restricted?: boolean;
}