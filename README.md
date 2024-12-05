
### Build
```
docker build -t docker_test .
```
### Run app
```sh
 docker run -it -p 8080:3001 docker_test
```
### Test
```sh
curl http://localhost:8080/ping
```
### Run all: app and db
```sh
docker-compose up
```