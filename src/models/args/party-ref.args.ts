import { Field, ArgsType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { MaxLength } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { party_ext_ref as PartyExtRefModel, Prisma } from '@prisma/client';


@ArgsType()
export class PartyIdArgs {
  @IsNotEmpty()
  partyRef: string;
}

@ArgsType()
export class GetPartyClassArgs {
  @Field({ nullable: false })
  party_ref?: string;

  @Field({ nullable: false })
  party_class?: string;
}



@ArgsType()
export class PartyNarrativeArgs {
  @Field({ nullable: false })
  party_ref?: string;
  
  @Field({ nullable: false })
  narr_type?: string
}

// @ArgsType()
// export class PartyFlagArgs {
//   @Field({nullable: false }) 
//   where?: Prisma.party_flagWhereUniqueInput 
// }

