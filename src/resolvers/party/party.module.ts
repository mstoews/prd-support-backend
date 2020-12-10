import { PrismaService } from '../../services/prisma.service';
import { Module, HttpModule } from '@nestjs/common';
import { PartyResolver } from './party.resolver';
import { PartyExtRefResolver } from './party-ext-ref.resolver';
import { PartyClassificationResolver } from './party-classification.resolver';
import { PartyFlagResolver } from './party-flag.resolver';
import { PartyInstrResolver } from './party-instr.resolver';
import { PartyNarrativeResolver } from './party-narrative.resolver';
import { PartyAssocResolver} from './party-assoc.resolver';
import { PartySSIResolver} from './party-ssi.resolver';
import { EnvironmentResolver} from '../environment.resolver';
import { HttpPostService } from 'src/services/http-post/http-post.service';

@Module({
  imports:[HttpModule],
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
    HttpPostService,
    EnvironmentResolver,
 ]

})
export class PartyModule {}