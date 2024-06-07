import { Module } from '@nestjs/common';
import { PoolsController } from './pools.controller';
import { PoolsService } from './pools.service';
import { poolProviders } from './pools.providers';

@Module({
  controllers: [PoolsController],
  providers: [PoolsService, ...poolProviders]
})
export class PoolsModule {}
