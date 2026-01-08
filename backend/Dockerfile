# =========================
# 1️⃣ DEV STAGE
# =========================
FROM maven:3.9.9-eclipse-temurin-21 AS dev
WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
EXPOSE 8080

CMD ["mvn", "spring-boot:run"]


# =========================
# 2️⃣ BUILD STAGE
# =========================
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests


# =========================
# 3️⃣ PROD STAGE
# =========================
FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
