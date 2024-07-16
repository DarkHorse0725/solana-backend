import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(
    private tagService: TagsService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getTags() {
    const tags = await this.tagService.findAll();
    return tags;
  }
}
