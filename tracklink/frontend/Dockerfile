FROM oven/bun:1-alpine

LABEL authors="danvanbueren"

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY . .

CMD ["bun", "run", "dev"]


## TODO: For production deployment
## Build React app with injected env variables
#FROM oven/bun:1-alpine as build
#WORKDIR /app
#COPY package.json bun.lock ./
#RUN bun install --frozen-lockfile
## Pass the build argument for the API URL
#ARG REACT_APP_API_URL
#ENV REACT_APP_API_URL=$REACT_APP_API_URL
#COPY . .
#RUN bun run build
## Serve React app
#FROM nginx:alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]