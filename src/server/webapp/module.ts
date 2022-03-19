import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientViewModule } from 'src/server/client/view.module';
import { WebappConfig } from 'src/server/webapp/config';
import { ApiModule } from 'src/server/api/module';

@Module({
  imports: [
    ApiModule,
    ClientViewModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [WebappConfig],
    }),
  ],
})
export class WebAppModule {}
