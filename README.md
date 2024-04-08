# oauth-sample

## Pre-requisites
- Maven 3.6 or later
- Java 17 or later
- npm and yarn

## How to install / run

### Install

```
mvn clean install
```

### Run

```
java -jar oauth-server/target/oauth-server-0.1-SNAPSHOT.jar & 
java -jar oauth-client/target/oauth-client-0.1-SNAPSHOT.jar &
```

### Start application 

Open browser on 

```
localhost:8080
```

### DEV Mode 

Start dev-server

```
cd oauth-ng/ && ng serve &
```

Open browser on 

```
localhost:4200
```

