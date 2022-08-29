import * as requestIp from 'request-ip';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const ClinetIp = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();

    return request.headers['cf-connecting-ip']
      ? request.headers['cf-connecting-ip']
      : requestIp.getClientIp(request);
  },
);
