# Car Warehouse

## Description
Instructions on how to run BE code:

### Required:
- Java version: 17.
- DB: PostgreSQL.
- Maven.

### Steps:
#### 1. At application.property file: change config DB (port, username, password). Example: 
spring.datasource.url=jdbc:postgresql://0.0.0.0:5432/databasename
spring.datasource.username= yourdb
spring.datasource.password= yourpw

#### 2. Install dependencies:
mvn install