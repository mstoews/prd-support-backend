import { Module, HttpModule } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Module({
  imports:[HttpModule],
  providers: [
    PrismaService, 
 ]
 

})

export class KanbanModule {}