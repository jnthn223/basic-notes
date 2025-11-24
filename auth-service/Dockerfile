# ---------- STAGE 1: BUILD ----------
# Use official Gradle image with JDK
FROM gradle:8.8-jdk21 AS builder

# Set workdir
WORKDIR /app

# Copy project files
COPY . .

# Run Gradle build (bootJar) using pre-installed Gradle
RUN gradle bootJar --no-daemon

# ---------- STAGE 2: RUNTIME ----------
# Use lightweight JDK runtime
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copy the built jar from builder stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Entry point
ENTRYPOINT ["java", "-jar", "app.jar"]