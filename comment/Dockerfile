FROM node:alpine

WORKDIR /app
EXPOSE 3000
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]