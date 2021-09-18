
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Auth } from 'src/models/auth.model';
import { Token } from 'src/models/token.model';
import { PasswordService } from 'src/services/password.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService
  ) { }

  async login(userid: string, password: string): Promise<Auth> {

    const user = await this.userService.validateUser(userid);
    if (!user) {
      throw new NotFoundException(`No user found for userid: ${userid}`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password
    );
    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const token = this.generateToken({
      userId: user.userid,
    });

    let auth = new Auth;
    auth.user = user;
    auth.accessToken = token.accessToken;
    auth.refreshToken = token.refreshToken;

    return auth;
  }

  generateToken(payload: object): Token {

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.configService.get('JWT_REFRESH_IN'),
    });
    const refreshToken = this.jwtService.sign(payload);

    let token = new Token;
    token.accessToken = accessToken;
    token.refreshToken = refreshToken;

    return token;
  }

  refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token);
      return this.jwtService.sign(userId, {
        expiresIn: this.configService.get('JWT_REFRESH_IN'),
      });
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

}
