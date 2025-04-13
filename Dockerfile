FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/kaddem-0.0.1.jar .
EXPOSE 8089
ENTRYPOINT ["java","-jar","kaddem-0.0.1.jar"]