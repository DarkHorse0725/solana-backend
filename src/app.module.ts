import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PoolsModule } from './pools/pools.module';
import { CountriesModule } from './countries/countries.module';
import { PurchaseTokenModule } from './purchase-token/purchase-token.module';
import { TagsModule } from './tags/tags.module';
import { StatModule } from './stat/stat.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    AuthModule,
    PoolsModule,
    CountriesModule,
    PurchaseTokenModule,
    TagsModule,
    StatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
