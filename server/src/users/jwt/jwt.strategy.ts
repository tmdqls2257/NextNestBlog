import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users.service';
import { JwtPayload } from './jwt.playload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([jwtExtractorFromCookies]),
      secretOrKey: configService.get('SECRET_KEY'),
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtPayload){
    try{
        const user = await this.usersService.findUserById(payload.sub)

        if(user) {
            return user
        } else {
            throw new Error('해당하는 유저는 없습니다.')
        }
    }
  }
}
