# payment-service Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

ENV NODE_ENV=production
ENV PORT=3003

EXPOSE 3003

CMD ["node", "server.js"]
