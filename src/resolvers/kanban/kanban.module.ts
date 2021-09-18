import { Module, HttpModule } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { KanbanPriorityResolver } from './kanban.priority';
import { KanbanStatusResolver} from './kanban.status'
import { KanbanSubtaskResolver } from './kanban.subtask';
import { KanbanTaskResolver} from './kanban.task'
import { KanbanTypeResolver } from './kanban.type';


@Module({
  imports:[HttpModule],
  providers: [
    PrismaService, 
    KanbanPriorityResolver,
    KanbanStatusResolver,
    KanbanTaskResolver,
    KanbanTypeResolver,
    KanbanSubtaskResolver,
 ]
})

export class KanbanModule {}