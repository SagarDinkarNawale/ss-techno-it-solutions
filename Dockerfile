# Use Amazon Corretto 11 as the base image
FROM amazoncorretto:11-alpine-jdk

# Install Maven
RUN apk add --no-cache maven

# Set the working directory inside the container
WORKDIR /ss

# Copy the pom.xml file to leverage Docker layer caching for dependencies
COPY ./pom.xml ./pom.xml

# Copy the project source code into the container
COPY ./src ./src

# Download the dependencies and build the project
RUN mvn clean package -DskipTests

# Expose port 8080 for the Spring Boot application
EXPOSE 8080

# Run the Spring Boot application from the generated JAR
CMD ["java", "-jar", "target/ss-techno-it-solutions-1.0-SNAPSHOT.jar"]
