FROM node:12

WORKDIR /app
COPY . /app

RUN npm ci --only=production

CMD [ "npm", "run", "start" ]
