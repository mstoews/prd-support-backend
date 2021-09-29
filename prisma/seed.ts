import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  
  // await kanbanStatus('Open', 'Not yet started');
  // await kanbanStatus('InProgress', 'In progress of analysis and completion');
  // await kanbanStatus('InReview', 'Completed and needs confirmation');
  // await kanbanStatus('Completed', 'Comfirmed completed');
  

  // await kanbanPriority('Critical','Highest criticality');
  // await kanbanPriority('High','High criticality');
  // await kanbanPriority('Medium','Medium criticality');
  // await kanbanPriority('Low','Low criticality');

  // await kanbanType('Amend','Amend an existing documenation');
  // await kanbanType('Add','Add a documenation');
  // await kanbanType('Delete','Delete a documenation');
  // await kanbanType('Modify','Modify a documenation');

  await kanbanSeed('C029-1','Medium', 'Open', 'Amend');
  await kanbanSeed('C029-2','Medium', 'InProgress', 'Amend');
  await kanbanSeed('C029-3','High', 'InReview', 'Amend');
  await kanbanSeed('C029-4','Medium', 'Open', 'Modify');
  await kanbanSeed('C029-5','Medium', 'InProgress', 'Delete');
  await kanbanSeed('C029-6','High', 'InReview', 'Amend');
  await kanbanSeed('C029-7','Medium', 'Open', 'Amend');
  await kanbanSeed('C029-8','Medium', 'InProgress', 'Amend');
  await kanbanSeed('C029-9','High', 'InReview', 'Add');
}

async function kanbanSeed(task_id: string, priority: string, status: string, type: string) {
  console.log(`Running create task: ${task_id}` );
  dotenv.config();
  const kanban = await prisma.kb_task.create({
    data: {
      assignee: '@mst',
      classname: 'create',
      color: '#5B8B4F',
      estimate: 2,
      party_ref: 'C029',
      priority: priority,
      rankid: 1,
      status: status,
      summary: 'Create new party structure by cloning another',
      tags: '#initialize',
      task_id: task_id,
      title: 'Initialize',
      type: type
    },
  });

  return kanban;
}

async function kanbanPriority(priority: string, desc: string){
  const today = new Date();
  console.log(`Running create task ${today}`);
  const status = await prisma.kb_priority.create({
    data: {
      description: desc,
      priority: priority,
      updatedte: today.toISOString(),
      updateusr: 'ADMIN'
    }
  })
  if (status){
    console.log(`Task priority created`);
  }
  return status;
}

async function kanbanType(type: string, desc: string)
{
  console.log(`Running adding a type ${type}`);

  const status = await prisma.kb_type.create({
    data: {
      type: type,
      description: desc,
      updatedte: '2021-09-02T08:44:38.079Z',
      updateusr: 'ADMIN'
    }
  })
  if (status){
    console.log(`Task priority created`);
  }
  return status;
}

async function kanbanStatus(status: string, desc: string)
{
  console.log(`Running adding a status ${status}`);

  const rc = await prisma.kb_status.create({
    data: {
      status: status,
      description: desc,
      updatedte: '2021-09-02T08:44:38.079Z',
      updateusr: 'ADMIN'
    }
  })
  if (status){
    console.log(`Task priority created`);
  }
  return rc;
}



main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
