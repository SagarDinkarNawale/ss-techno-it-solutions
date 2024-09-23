FROM amazoncorretto:11-alpine-jdk

WORKDIR /ss

COPY ./src/ /ss/src/
COPY ./target/ss-techno-it-solutions-1.0-SNAPSHOT.jar /ss/ss-techno-it-solutions-1.0-SNAPSHOT.jar
EXPOSE 7080
CMD ["java","-jar", "ss-techno-it-solutions-1.0-SNAPSHOT.jar"]