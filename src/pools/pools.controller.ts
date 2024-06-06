import { Controller, HttpCode, HttpStatus, Post, UseInterceptors } from '@nestjs/common';
import { PoolsService } from './pools.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 } from 'uuid';
import * as path from 'path';

@Controller('pools')
export class PoolsController {
  constructor(
    private poolService: PoolsService
  ) {}

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
  async createPool() {

  }
}
