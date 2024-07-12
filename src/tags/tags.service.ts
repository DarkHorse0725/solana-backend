import { Inject, Injectable } from '@nestjs/common';
import { Tag } from './tags.model';
import { CreateTagDto } from './tags.dto';

@Injectable()
export class TagsService {
  constructor(
    @Inject('TAG_REPOSITORY')
    private tags: typeof Tag
  ){}

  createMany(data: CreateTagDto[]):Promise<Tag[]> {
    return this.tags.bulkCreate(data);
  }

  findAll():Promise<Tag[]> {
    return this.tags.findAll();
  }
}
