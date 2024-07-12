import { Inject, Injectable } from '@nestjs/common';
import { CreateStatDto } from './stat.dto';
import { Stat } from './stat.model';

@Injectable()
export class StatService {
  constructor(
    @Inject('STAT_REPOSITORY')
    private stat: typeof Stat,
  ){}

  create(data: CreateStatDto):Promise<Stat> {
    return this.stat.create(data);
  }

  findAll():Promise<Stat[]> {
    return this.stat.findAll();
  }
}
