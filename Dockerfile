FROM node:14

WORKDIR /app

# copy package.json to install dependencies first
COPY ./package*.json app/

RUN npm install

# copy other files such as source codes
COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]

