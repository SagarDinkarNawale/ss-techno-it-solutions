# Use Amazon Corretto 11 as the base image
FROM amazoncorretto:11-alpine-jdk

# Set the working directory inside the container
WORKDIR /ss

# Copy the Maven wrapper and pom.xml first to leverage Docker layer caching
COPY ./mvnw ./mvnw
COPY ./pom.xml ./pom.xml
COPY ./.mvn ./.mvn

# Download the Maven dependencies (this will cache dependencies if there are no changes to pom.xml)
RUN ./mvnw dependency:go-offline

# Copy the entire project source code into the container
COPY ./src ./src

# Build the Spring Boot application using Maven
RUN ./mvnw clean package -DskipTests

# Expose port 8080 for the Spring Boot application
EXPOSE 8080

# Run the application from the JAR file
CMD ["java", "-jar", "./target/ss-techno-it-solutions-1.0-SNAPSHOT.jar"]
