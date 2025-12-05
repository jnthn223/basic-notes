# --------------------- Build stage ---------------------
FROM gradle:9.2.0-jdk21 AS builder
WORKDIR /app

# Copy Gradle wrapper and Gradle config first for caching
COPY gradlew ./
COPY gradle ./gradle
COPY build.gradle settings.gradle ./

# Copy the source code
COPY src ./src

# Make the wrapper executable
RUN chmod +x ./gradlew

# Build the Spring Boot JAR
RUN ./gradlew bootJar --no-daemon

# --------------------- Runtime stage ---------------------
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy the built jar from builder stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]