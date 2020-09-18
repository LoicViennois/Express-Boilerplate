# Base
FROM node:lts-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Dev
FROM base as dev

EXPOSE 3000

ENV NODE_ENV="development"

ENV EXPRESS_INTERFACE="0.0.0.0"

CMD ["npm", "run", "start"]

# Build
FROM base as build

RUN npm run lint && \
    npm run build && \
    npm run test:prod

# Prod
FROM node:lts-alpine as prod

EXPOSE 3000

ENV NODE_ENV="production"

ENV EXPRESS_INTERFACE="0.0.0.0"

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

HEALTHCHECK CMD node ./dist/hc.js

CMD [ "node", "./dist/server.js" ]
