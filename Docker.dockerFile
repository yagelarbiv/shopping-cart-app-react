# add a file to dockerfile
FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 3000
COPY DataBase /app/DataBase
CMD ["npm", "start"]