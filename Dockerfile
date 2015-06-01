FROM docker.io/node:latest

RUN mkdir -p /root/app

WORKDIR /root/app

RUN apt-get update
RUN apt-get -y upgrade

ADD . /root/app

RUN npm install

EXPOSE 3000

CMD ["app.js"]

ENTRYPOINT /usr/local/bin/node
