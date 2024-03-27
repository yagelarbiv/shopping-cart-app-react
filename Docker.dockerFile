# generate a file for this project
# docker run -p 3000:3000 <image id>
FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]