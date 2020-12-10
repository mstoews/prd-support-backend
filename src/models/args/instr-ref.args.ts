import { Field, ArgsType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { MaxLength } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class InstrIdArgs {
  @IsNotEmpty()
  instrRef: string;
}

@ArgsType()
export class GetInstrClassArgs {
  @Field({ nullable: false })
  instr_ref?: string;

  @Field({ nullable: false })
  instr_class?: string;
}

@ArgsType()
export class InstrNarrativeArgs {
  @Field({ nullable: false })
  instr_ref?: string;
  
  @Field({ nullable: false })
  narr_type?: string
}


@ArgsType()
export class InstrAccrualArgs {
  @Field({ nullable: false })
  instr_ref?: string;
}

