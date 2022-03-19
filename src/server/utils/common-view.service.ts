import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import next from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class CommonViewService implements OnModuleInit {
  constructor(private configService: ConfigService) {}
  /**
   * next server
   */
  private server: NextServer;

  /**
   * next - init hook
   */
  async onModuleInit(): Promise<void> {
    try {
      this.server = next({
        dev: this.configService.get('NODE_ENV') === 'dev',
        dir: './src/client',
      });
      await this.server.prepare();
    } catch (error) {
      console.error(error);
    }
  }

  getNextServer = (): NextServer => this.server;
}
