FROM node

WORKDIR /app

ADD . .

RUN npm install

EXPOSE 8080

CMD ["node", "/app/app.js"]