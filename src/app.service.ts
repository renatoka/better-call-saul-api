import { Injectable, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Injectable()
export class AppService {
  redirect(@Res() res): void {
    return res.redirect('/api');
  }
}
