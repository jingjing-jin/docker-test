FROM node:lts-alpine 
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]