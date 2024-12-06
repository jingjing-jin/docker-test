
### Build
```
docker build -t docker_test .
```
### Run app
```sh
docker run -it -p 8080:3001 docker_test
```
### Share stroage with bind mounts
```sh
docker run -it -v ./website:/public -p 8080:3001 docker_test
# mapping local directory './website' from host system to the docker container directory'/public'      
```
### Test
```sh
curl http://localhost:8080/ping
```
### Run all: app and db
```sh
docker-compose up
```
