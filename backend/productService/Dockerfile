# product-service Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

ENV NODE_ENV=production
ENV PORT=3004

EXPOSE 3004

CMD ["node", "server.js"]
