import { Controller, HttpCode, HttpStatus, Post, UseInterceptors, Body, UploadedFile, Get, UseGuards, Request } from '@nestjs/common';
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

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post()
  @UseInterceptors(FileInterceptor('banner', {
    storage: diskStorage({
      destination: 'files',
      filename: (req, file, cb) => {
        cb(null, v4() + path.extname(file.originalname));
      }
    })
  }))
  async createPool(@Body() body: CreatePoolDto, @UploadedFile() file: Express.Multer.File, @Request() req: any) {
    const poolData = {...body, banner: `${process.env.BASE_URL}/image/${file.filename}`, userId: req.user.sub};
    const pool = await this.poolService.create(poolData);
    return pool;
  }
}
