import { Module } from '@nestjs/common';
import { StatController } from './stat.controller';
import { StatService } from './stat.service';
import { statProviders } from './stat.providers';

@Module({
  controllers: [StatController],
  providers: [StatService, ...statProviders],
  exports: [StatService]
})
export class StatModule {}
