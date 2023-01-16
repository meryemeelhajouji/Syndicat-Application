FROM node:16

WORKDIR /front-end/dashboard_1

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]