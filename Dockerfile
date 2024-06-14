FROM node:20-alpine

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]

