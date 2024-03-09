FROM node:20 AS build
WORKDIR /app
COPY . /app
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/resumebuilder /usr/share/nginx/html
COPY frontend-nginx /etc/nginx/sites-available/frontend-nginx
ENV BACKEND_URL BACKEND_URL
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
