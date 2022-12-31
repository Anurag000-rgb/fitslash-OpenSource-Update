FROM node:18-alpine AS build

WORKDIR /app
copy . .

RUN yarn
RUN yarn build

FROM nginx  AS deploy

WORKDIR /usr/share/nginx/html
RUN rm-rf ./*
COPY --from=build /app/public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]


