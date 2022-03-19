import { Injectable } from '@nestjs/common';
import { CommonViewService } from 'src/server/utils/common-view.service';

@Injectable()
export class ClientViewService extends CommonViewService {}
