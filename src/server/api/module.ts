import { Module } from '@nestjs/common';
import { ApiLoggerService } from './logger.service';
import { SampleEndpointController } from './sample/endpoint.controller';

@Module({
  providers: [ApiLoggerService],
  controllers: [SampleEndpointController],
})
export class ApiModule {}
