import { Logger } from "@nestjs/common";
import { Query, Args, Resolver } from "@nestjs/graphql";
import { GlossCodes } from "src/models/party.model";
import { PrismaService } from "src/services/prisma.service";

@Resolver('GlossCodes')
export class GlossCodesResolver {

    private readonly logger = new Logger('GlossCodesResolver');

    constructor(
        private prisma: PrismaService
    ) { }

    @Query((returns) => [GlossCodes])
    async glossCodesByClass(
        @Args('class_value', { nullable: false }) class_value?: number) {
            this.logger.log("Codes for " + class_value + " queried");
        return this.prisma.gloss_codes.findMany({
            where: {
                class_value: class_value,
            },
        });
    }

}