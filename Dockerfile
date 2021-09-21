FROM ubuntu:18.04
RUN apt update && apt install -y wget git
RUN wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
RUN dpkg -i packages-microsoft-prod.deb
RUN apt install -y nodejs && apt update -y && apt install -y npm
RUN npm install
COPY . ./
EXPOSE 80:80
ENTRYPOINT node server.js