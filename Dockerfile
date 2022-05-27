FROM node:alpine3.14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]

