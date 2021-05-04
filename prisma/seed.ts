import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

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

}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
