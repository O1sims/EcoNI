FROM openjdk:8-jdk-alpine

VOLUME /tmp

RUN mkdir /econi
WORKDIR /econi
ADD target/api-0.0.1-SNAPSHOT.jar /econi

EXPOSE 9000
