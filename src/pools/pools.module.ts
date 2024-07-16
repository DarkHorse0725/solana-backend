import { Module, forwardRef } from '@nestjs/common';
import { PoolsController } from './pools.controller';
import { PoolsService } from './pools.service';
import { poolProviders } from './pools.providers';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PoolsController],
  providers: [PoolsService, ...poolProviders],
  imports: [
    forwardRef(() => UsersModule)
  ]
})
export class PoolsModule {}
