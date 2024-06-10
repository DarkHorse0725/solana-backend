import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('image/:imageName')
  async serveImage(@Res() res: Response, @Param('imageName') imageName: string) {
    const imagePath = `files/${imageName}`; // Replace with the actual path to your images
    const image = fs.readFileSync(imagePath);
    res.set('Content-Type', 'image/jpeg');
    res.send(image);
  }
}
