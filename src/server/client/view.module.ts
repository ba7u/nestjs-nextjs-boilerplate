import { Module } from '@nestjs/common';
import { ClientViewController } from './view.controller';
import { ClientViewService } from './view.service';

@Module({
  controllers: [ClientViewController],
  providers: [ClientViewService],
})
export class ClientViewModule {}
