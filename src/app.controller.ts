import { Controller, Get } from '@nestjs/common';
import { get } from 'https';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/batata')
  batata() {
    return 'Hello Rocketseat'
  }
}
