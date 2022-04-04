import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TestController} from './test.controller'

//process.env

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [TestController],
})
export class HttpModule {}
