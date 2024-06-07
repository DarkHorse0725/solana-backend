import { Inject, Injectable } from '@nestjs/common';
import { Pool } from './pools.model';
import { CreatePoolDto } from './pools.dto';

@Injectable()
export class PoolsService {
  constructor(
    @Inject('POOLS_REPOSITORY')
    private pools: typeof Pool
  ){}

  create(poolData: CreatePoolDto): Promise<Pool> {
    return this.pools.create(poolData);
  }
}
