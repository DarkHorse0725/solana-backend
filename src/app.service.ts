import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { CountriesService } from './countries/countries.service';
import { countries } from './seeds/countries';
import { PurchaseTokenService } from './purchase-token/purchase-token.service';
import { TagsService } from './tags/tags.service';
import { purchaseTokens } from './seeds/purchase-tokens';
import { tags } from './seeds/tags';
import { StatService } from './stat/stat.service';
import { stats } from './seeds/stats';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private authService: AuthService,
    private countryService: CountriesService,
    private purchaseTokenService: PurchaseTokenService,
    private tagService: TagsService,
    private statService: StatService,
  ){}
  onApplicationBootstrap() {
    try {
      // this.seedAdmin();
      // this.seedCountries();
      // this.seedPurchaseTokens();
      // this.seedTags();
      // this.seedStats();
    } catch (e) {
      console.log(e);
    }
  }

  seedAdmin() {
    this.authService.signUp({
      email: 'admin@paid.com',
      password: 'admin123',
      role: 'super_admin'
    })
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
  seedStats() {
    this.statService.create(stats[0]);
  }
  getHello(): string {
    return 'Hello World!';
  }
  
}
