import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  await partySeed();
  await kanbanPriority();
  await kanbanType();
  await kanbanSeed();
}

async function partySeed() {
  const party = await prisma.party.create({
    data: {
      party_ref: "TRAD23",
      party_type: "BOOK",
      party_short_name: "TRADING",
      party_long_name: "TRADING",
      party_extra_long_name: "TRADING",
      active_ind: "A",
      version_date: null,
      version_no: 1,
      version_user: "JMARSDEN"
    },
  });
  return party;
}

async function kanbanSeed() {
  console.log('Running create task');
  dotenv.config();
  const kanban = await prisma.kb_task.create({
    data: {
      assignee: '@mst',
      classname: 'create',
      color: '#ffffff',
      estimate: 2,
      party_ref: 'JPTC',
      priority: 'High',
      rankid: 1,
      status: 'Open',
      summary: 'Create new party structure by cloning another',
      tags: '#initialize',
      task_id: 'TASK_2',
      title: 'Initialize',
      type: 'Amendment'
    },
  });

  return kanban;
}

async function kanbanPriority(){
  console.log('Running create task');
  const status = await prisma.kb_priority.create({
    data: {
      description: 'Medium task',
      priority: 'Medium',
      updatedte: '2021-09-02T08:44:38.079Z',
      updateusr: 'ADMIN'
    }
  })
  if (status){
    console.log(`Task priority created`);
  }
  return status;
}


async function kanbanType()
{
  console.log('Running AddType');
  const status = await prisma.kb_type.create({
    data: {
      description: 'Create a new value',
      type: 'Creation',
      updatedte: '2021-09-02T08:44:38.079Z',
      updateusr: 'ADMIN'
    }
  })
  if (status){
    console.log(`Task priority created`);
  }
  return status;
}


main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
