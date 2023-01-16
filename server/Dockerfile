FROM node:16
WORKDIR /Syndicat-Application/server/
COPY ./package.json /Syndicat-Application/server/
RUN npm install
COPY . .
# ====== production ===========
# RUN npm ci --only=production

CMD ["npm", "start"]
# ====== production ===========
# CMD ["node", "index.js"]

