FROM node:12-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn config set "strict-ssl" false -g

RUN yarn install 

RUN npx browserslist@latest --update-db

COPY . .

EXPOSE $PORT

ENTRYPOINT [ "yarn","run","start:prod" ]