import { PrismaClient } from '@prisma/client';
import { deepStrictEqual } from 'assert';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  


}

async function create_dashboard(dashboard: string, desc: string)
{
  

  const rc = await prisma.client_dashboards.create({
    data: {
      dashboardtype: dashboard,  
      maintitle: desc,
      maintitlecount: "1",
      subtitle: dashboard,
      maintitlecountyesterday: "1",
      maintitlecounttwodays: "2",
      maintitlecountthreedays: "3"
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
