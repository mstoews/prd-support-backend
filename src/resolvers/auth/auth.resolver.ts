import { BadRequestException, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import {
  Args, Mutation, Resolver
} from '@nestjs/graphql';
import { Auth } from '../../models/auth.model';
import { Token } from '../../models/token.model';
import { AuthService } from '../../services/auth.service';
import { LoginInput } from './dto/login.input';

@Resolver((of) => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) { }

  private readonly logger = new Logger('AuthResolver');

  @Mutation((returns) => Auth)
  async login(@Args('data') { userid, password }: LoginInput) {
    this.logger.log(`User : ${userid} is trying to login`);
    try {
      const auth = await this.auth.login(
        userid.toLowerCase(),
        password
      );
      this.logger.log(`User : ${userid} logged in`);
      return auth;
    }
    catch (e) {
      this.logger.log(`User : ${userid} log in failed`);
      if ((e instanceof NotFoundException) || (e instanceof BadRequestException)) {
        throw e;
      }
      else {
        throw new InternalServerErrorException(e);
      }
    }
  }

  @Mutation((returns) => Token)
  async refreshToken(@Args('refreshtoken') token: string) {
    return this.auth.refreshToken(token);
  }

}
