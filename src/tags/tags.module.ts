import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { tagProviders } from './tags.providers';

@Module({
  controllers: [TagsController],
  providers: [TagsService, ...tagProviders],
  exports: [TagsService]
})
export class TagsModule {}
