import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { CountriesService } from './countries/countries.service';
import { countries } from './seeds/countries';
import { PurchaseTokenService } from './purchase-token/purchase-token.service';
import { TagsService } from './tags/tags.service';
import { purchaseTokens } from './seeds/purchase-tokens';
import { tags } from './seeds/tags';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private authService: AuthService,
    private countryService: CountriesService,
    private purchaseTokenService: PurchaseTokenService,
    private tagService: TagsService,
  ){}
  onApplicationBootstrap() {
    try {
      // this.authService.signUp({
      //   email: 'admin@paid.com',
      //   password: 'admin123',
      //   role: 'admin'
      // })
      // this.seedCountries();
      // this.seedPurchaseTokens();
      // this.seedTags();
    } catch (e) {
      console.log(e);
    }
  }
  seedCountries() {
    this.countryService.createMany(countries)
  }
  seedPurchaseTokens() {
    this.purchaseTokenService.createMany(purchaseTokens);
  }
  seedTags() {
    this.tagService.createMany(tags);
  }
  getHello(): string {
    return 'Hello World!';
  }
  
}
