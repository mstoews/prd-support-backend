import { PartyResolver } from './party.resolver';
import { PrismaService } from '../../services/prisma.service';
import { Module } from '@nestjs/common';
import { PartyExtRefResolver } from './party-ext-ref.resolver';
import { PartyClassificationResolver } from './party-classification.resolver';
import { PartyFlagResolver } from './party-flag.resolver';
import { PartyInstrResolver } from './party-instr.resolver';
import { PartyNarrativeResolver } from './party-narrative.resolver';
import { PartyAssocResolver} from './party-assoc.resolver';
import { PartySSIResolver} from './party-ssi.resolver';

@Module({
  providers: [
    PrismaService, 
    PartyResolver, 
    PartyExtRefResolver, 
    PartyClassificationResolver, 
    PartyFlagResolver, 
    PartyInstrResolver, 
    PartyNarrativeResolver,
    PartyAssocResolver,
    PartySSIResolver,
]
})

@Module({})
export class PartyModule {}