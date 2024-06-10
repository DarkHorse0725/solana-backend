import { Inject, Injectable } from '@nestjs/common';
import { Pool } from './pools.model';
import { CreatePoolDto } from './pools.dto';
import { getPoolByPubkey, getPools } from 'src/utils/solana.utils';

@Injectable()
export class PoolsService {
  constructor(
    @Inject('POOLS_REPOSITORY')
    private pools: typeof Pool
  ){}

  create(poolData: CreatePoolDto): Promise<Pool> {
    return this.pools.create(poolData);
  }

  async getPools () {
    const pools = await getPools();
    return pools;
  }

  findByPubkey(pubkey: string): Promise<Pool> {
    return this.pools.findOne({where: {pubkey}});
  }

  async getPool (pubkey: string) {
    const pool = await getPoolByPubkey(pubkey);
    return pool;
  }
}
