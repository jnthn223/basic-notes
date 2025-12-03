FROM gradle:9.2.0-jdk21 AS builder
WORKDIR /app

# Copy Gradle files only (cache dependencies)
COPY build.gradle settings.gradle ./
COPY gradle ./gradle

RUN gradle --no-daemon dependencies

# Now copy the rest of the source code
COPY src ./src

# Build app
RUN gradle bootJar --no-daemon

# --------------------- Runtime image ---------------------
FROM eclipse-temurin:21-jre

WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]