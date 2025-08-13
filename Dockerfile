FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm prune --omit-dev

EXPOSE 3000

RUN useradd -m containeruser
RUN chown -R containeruser /app
USER containeruser


CMD [ "node","index.js"]