# Modified by RJM - 18-Oct-2020 - Use v14 nodejs - fix to WSL2 issue
FROM nexus.devops.broadridge.net:9090/library/node:14 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

# Added by RJM - 18-Oct-2020 - to fix WSL2 issue
RUN npm rebuild

# Required if not done in postinstall
# RUN npx prisma generate

COPY . .

RUN npm run build

# Modified by RJM - 18-Oct-2020 - use v14 nodejs - fix to WSL2 issue
FROM nexus.devops.broadridge.net:9090/library/node:14

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
