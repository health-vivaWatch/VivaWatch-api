import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ApiTokenMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const apiTokenHeader = req.headers['x-api-token'] || '';

    if (apiTokenHeader === '') {
      throw new UnauthorizedException('Token was not provided');
    }

    if (apiTokenHeader !== this.configService.get<string>('API_TOKEN')) {
      throw new UnauthorizedException('Invalid token');
    }
    next();
  }
}
