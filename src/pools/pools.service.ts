import { Inject, Injectable } from '@nestjs/common';
import { Pool } from './pools.model';
import { CreatePoolDto } from './pools.dto';
import { getPoolByPubkey } from 'src/utils/solana.utils';
import { Tag } from 'src/tags/tags.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PoolsService {
  constructor(
    @Inject('POOLS_REPOSITORY')
    private pools: typeof Pool,
    private userService: UsersService,
  ){}

  create(poolData: CreatePoolDto): Promise<Pool> {
    this.userService.updateUserById(poolData.userId, {role: 'editor'});
    return this.pools.create(poolData);
  }

  async getPools (): Promise<Pool[]> {
    return this.pools.findAll({
      include: [
        {
          model: Tag,
          nested: true
        }
      ]
    });
  }

  findByPubkey(pubkey: string): Promise<Pool> {
    return this.pools.findOne({where: {pubkey}});
  }

  async getPool (pubkey: string) {
    const pool = await getPoolByPubkey(pubkey);
    return pool;
  }

  getUserPool (userId: string): Promise<Pool[]> {
    return this.pools.findAll({where: {userId}});
  }
}
