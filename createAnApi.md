# Create Graphql API with Prisma
## Create sample table and data
1. Create the table or data you would like to query in postgres database
```bash
create table sampleApi (
    description varchar(10),
    enterDte datetime
)
``` 
2. Populate the table with some sample data

```bash
insert into sampleApi select 'Description',now()
``` 
3. Create the prisma schema automatically with ;
```bash
npx prisma generate
``` 

## Add the necessary code changes in the server to reflect the new API
1. create the database model under /src/model directory
```bash
export class sampleApi {
    description:     string;
    enterDate:   Date;
}
```
