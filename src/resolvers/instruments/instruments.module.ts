import { Module, HttpModule } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { InstrResolver } from './instr.resolver';
import { InstrExtRefResolver } from './instr-ext-ref.resolver';
import { InstrClassificationResolver } from './instr-classification.resolver';
import { InstrFlagResolver } from './instr-flag.resolver';
import { InstrNarrativeResolver } from './instr-narrative.resolver';
import { InstrDateResolver } from './instr-date.resolver';
import { InstrAccrualResolver} from './instr-accrual.resolver';
import { HttpPostService } from 'src/services/http-post/http-post.service';

@Module({
  imports:[HttpModule],
  providers: [
    PrismaService, 
    InstrResolver, 
    InstrExtRefResolver, 
    InstrClassificationResolver, 
    InstrFlagResolver, 
    InstrNarrativeResolver,
    InstrDateResolver,
    InstrAccrualResolver,
    HttpPostService,
 ]

})

export class InstrumentsModule {}
