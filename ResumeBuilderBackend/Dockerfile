FROM node:20
WORKDIR /app
COPY . /app
RUN npm install --force
COPY . .
EXPOSE 4292
CMD ["npm", "run", "start"]