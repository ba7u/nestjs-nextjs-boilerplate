import { Injectable } from '@nestjs/common';
import { LoggerModule } from 'src/common/logger-module';

@Injectable()
export class ApiLoggerService extends LoggerModule {
  protected serviceName = 'API';
}
