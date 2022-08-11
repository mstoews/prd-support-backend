import { Injectable, NotFoundException } from '@nestjs/common';
import { prd_user } from '@prisma/client';
import { SignupInput } from 'src/resolvers/auth/dto/signup.input';
import { PasswordService } from './password.service';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) { }

  async createUser(payload: SignupInput): Promise<prd_user> {
    const hashedPassword = await this.passwordService.hashPassword(
      payload.password
    );
    return this.prisma.prd_user.create({
      data: {
        ...payload,
        password: hashedPassword,
      },
    });
  }

  async resetPassword(userid: string, password: string): Promise<prd_user> {

    const user = await this.validateUser(userid);
    if (!user) {
      throw new NotFoundException(`No user found for userid: ${userid}`);
    }

    const hashedPassword = await this.passwordService.hashPassword(
      password
    );

    user.password = hashedPassword;
    return this.prisma.prd_user.update(
      {
        where: {
          userid: userid
        },
        data: user
      });

  }

  validateUser(userId: string): Promise<prd_user> {
    return this.prisma.prd_user.findUnique({ where: { userid: userId } });
  }

}
