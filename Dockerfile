FROM node:alpine

WORKDIR /app

COPY .yarn ./.yarn
COPY public ./public
COPY src ./src
COPY .env.production ./.env
COPY .yarnrc.yml ./.yarnrc.yml
COPY index.html ./index.html
COPY package.json ./package.json
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.app.json ./tsconfig.app.json
COPY tsconfig.node.json ./tsconfig.node.json
COPY vite.config.ts ./vite.config.ts
COPY yarn.lock ./yarn.lock

RUN npm install -g serve
RUN yarn install && yarn build

EXPOSE 4200
CMD ["serve", "-s", "-l", "4200", "./dist"]

