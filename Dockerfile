FROM node:15.4.0-alpine3.12 as build

WORKDIR /usr/src/app

# Build service
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY jest.supertest.config.js ./
COPY jest.test.config.js ./
COPY service/ ./service/
RUN npm install
RUN npm run build

# Run tests for the api
RUN npm run test
RUN npm run supertest

# Build the final docker image
FROM node:15.4.0-alpine3.12 as final
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build ./build
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production

RUN npm run start:build
EXPOSE 3000
