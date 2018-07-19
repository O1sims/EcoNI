# EcoNI

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)

## Overview

EcoNI is a Java-based web application designed to make Northern Ireland's public economic data more accessible for researchers, developers and practitioners by providing a repository and API for Northern Irish economic data.

## Technology stack

The Java web application uses [Spring](https://spring.io/) for the backend framework and [AngularJS](https://angularjs.org/) for the frontend framework. Documentation of the RESTful API service is handled by [Swagger](https://swagger.io/). We use [MongoDB](https://www.mongodb.com/) as our main database. Development is done within a [Docker](https://www.docker.com/) environment.

## Building the application

Currently, the application is built locally and the resulting JAR is passed into the EcoNI Docker container. Therefore, assuming the Java 8 is installed locally, the application can be built by first cloning the repository then using the `build.sh` script:
```
git clone https://github.com/O1sims/EcoNI.git
cd EcoNI
bash build.sh all
```
This will run tests, generate the JAR and then transfer it into a Docker container. The `build.sh` file has multiple options to choose from.

## Running the application

The `build.sh` file also coordinates the running of the application. Specifically, the application can be spun up with:
```
bash build.sh up
```
Likewise, the application can be brought down with `bash build.sh down`.

By default, the main EcoNI application is accessible on port `3000`, the API and backend components are on port `9000`, the Mongo database is run on port `27017`. Swagger API documentation can be found at `localhost:9000/api/swagger-ui.html`.

The `docker-compose.yml` can be altered to allow these services to run on different ports. Likewise, environmental variables for the application can also be changed in the `docker-compose.yml` file.

## Contact

The best way to troubleshoot or ask for a new feature or enhancement is to create a Github [issue](https://github.com/O1sims/EcoNI/issues). However, if you have any further questions you can contact [me](mailto:sims.owen@gmail.com) directly.
