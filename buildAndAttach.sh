#! /bin/sh

docker build --tag api:latest .
docker run -it -p 3000:3000 api:latest /bin/sh
