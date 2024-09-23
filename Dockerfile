FROM amazoncorretto:11-alpine-jdk

RUN apk add --no-cache maven

WORKDIR /ss

COPY ./pom.xml ./pom.xml

COPY ./src ./src

RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/ss-techno-it-solutions-1.0-SNAPSHOT.jar"]
