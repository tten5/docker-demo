FROM node:14

# Any RUN, CMD, ADD, COPY, or ENTRYPOINT command will be executed in the specified working directory.
WORKDIR /app

# copy package.json to install dependencies first
COPY ./package*.json ./

RUN npm install

# copy other files such as source codes
COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]

