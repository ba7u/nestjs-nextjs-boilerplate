import { Controller, Get, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';

import { ClientViewService } from './view.service';

@Controller()
export class ClientViewController {
  constructor(private viewService: ClientViewService) {}

  @Get('*')
  publicGateway(@Req() req: Request, @Res() res: Response) {
    const handle = this.viewService.getNextServer().getRequestHandler();
    handle(req, res);
  }
}
