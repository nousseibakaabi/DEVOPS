FROM openjdk:17-jdk-alpine
EXPOSE 8089
COPY target/kaddem-0.0.1.jar kaddem.jar
ENTRYPOINT ["java","-jar","/kaddem.jar"]