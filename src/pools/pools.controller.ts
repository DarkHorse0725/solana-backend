import { Controller, HttpCode, HttpStatus, Post, UseInterceptors, Body, UploadedFile, Get, UseGuards, Request, Param } from '@nestjs/common';
import { PoolsService } from './pools.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 } from 'uuid';
import * as path from 'path';
import { CreatePoolDto } from './pools.dto';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('pools')
export class PoolsController {
  constructor(
    private poolService: PoolsService
  ) {}


  @HttpCode(HttpStatus.OK)
  @Get()
  async getPools () {
    const pools = await this.poolService.getPools();
    return pools;
  }

  @HttpCode(HttpStatus.OK)
  @Get(':pubkey')
  async getPoolByPubkey (@Param() {pubkey}: {pubkey: string;}) {
    const pool = await this.poolService.findByPubkey(pubkey);
    return pool;
  }

  @HttpCode(HttpStatus.OK)
  @Get('user/:userId')
  async getUserPool (@Param() {userId}: {userId: string;}) {
    const pool = await this.poolService.getUserPool(userId);
    return pool;
  }

  @HttpCode(HttpStatus.OK)
  @Get('account/:pubkey')
  async getPoolAccount (@Param() {pubkey}: {pubkey: string;}) {
    const pool = await this.poolService.getPool(pubkey);
    return pool;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post()
  // @UseInterceptors(FileInterceptor('banner', {
  //   storage: diskStorage({
  //     destination: 'files',
  //     filename: (req, file, cb) => {
  //       cb(null, v4() + path.extname(file.originalname));
  //     }
  //   })
  // }))
  async createPool(@Body() body: CreatePoolDto, @UploadedFile() file: Express.Multer.File, @Request() req: any) {
    // const poolData = {...body, banner: `${process.env.BASE_URL}/image/${file.filename}`, userId: req.user.sub};
    const pool = await this.poolService.create(body);
    return pool;
  }
}
