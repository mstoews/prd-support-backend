import { InternalServerErrorException, Logger, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import {
  Args, Mutation, Query, Resolver
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserService } from 'src/services/user.service';
import { UserEntity } from '../../decorators/user.decorator';
import { User } from '../../models/user.model';
import { LoginInput } from '../auth/dto/login.input';
import { SignupInput } from '../auth/dto/signup.input';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService
  ) { }

  private readonly logger = new Logger('UserResolver');

  @Query((returns) => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @Mutation((returns) => User)
  async signup(@Args('data') data: SignupInput) {
    data.email = data.email.toLowerCase();
    this.logger.log(`Creating user : ${data.userid}`);
    try {
      const user = await this.userService.createUser(data);
      this.logger.log(`Created user : ${data.userid}`);
      return user;
    }
    catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          this.logger.error(
            `There is a unique constraint violation, a new user cannot be created with this user ${data.userid}`
          );
          throw new UnprocessableEntityException(`User already exists with this user ${data.userid}.Please select a different name`);
        }
      }
      throw new InternalServerErrorException(e);
    }
  }

  @Mutation((returns) => User)
  async resetPassword(@Args('data') { userid, password }: LoginInput) {
    this.logger.log(`Resetting password for : ${userid}`);
    try {
      const user = await this.userService.resetPassword(userid, password);;
      this.logger.log(`Resetted password for : ${userid}`);
      return user;
    }
    catch (e) {
      this.logger.error(`Unable to reset password for : ${userid}`);
      if (!(e instanceof NotFoundException)) {
        throw new InternalServerErrorException(e);
      }
      else {
        throw e;
      }
    }
  }

}
