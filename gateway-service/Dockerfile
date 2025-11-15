# Stage 1: build
FROM gradle:9.2.0-jdk21 AS builder

WORKDIR /app

COPY . .
RUN chmod +x ./gradlew

# Just run bootJar (no subproject prefix)
RUN ./gradlew bootJar --no-daemon

# Stage 2: runtime
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy the generated JAR (adjust the version to your build)
COPY --from=builder /app/build/libs/gateway-service-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]