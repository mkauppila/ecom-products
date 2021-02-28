#! /bin/sh

docker build --tag template:latest .
docker run -it -p 3000:3000 template:latest /bin/sh
