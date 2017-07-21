FROM node:6.11

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Install process manager
RUN npm install -g pm2

# Bundle app source
COPY . /usr/src/app

EXPOSE 3111

CMD [ "node", "index.js" ]
