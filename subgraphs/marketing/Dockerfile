FROM node:22-alpine

COPY . .
RUN npm i -g pnpm@10.12.4 && npm i -g @nestjs/cli && pnpm i --frozen-lockfile && pnpm build

ENTRYPOINT ["pnpm", "run", "start:prod"]
