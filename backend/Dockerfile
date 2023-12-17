
FROM node:latest

WORKDIR /app/backend

COPY package.json .
RUN npm install

COPY . .
EXPOSE 8000

ENV NODE_ENV=production
CMD ["npm", "run", "start"]
