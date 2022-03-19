import { Controller, Post, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiLoggerService } from '../logger.service';

@Controller('api/sample')
export class SampleEndpointController {
  constructor(private apiLogger: ApiLoggerService) {}

  @Post('endpoint')
  sampleEndpoint(@Req() req: Request, @Res() res: Response) {
    this.apiLogger.log(`${JSON.stringify(req.body)}, ' < req.body`);
    res.send({ k: true });
  }
}
