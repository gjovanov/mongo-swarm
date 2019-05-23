# Deploy

## Docker build
Either build your own Docker images
- `docker build -t gjovanov/mongo-log-api .`

or us the build script with your own docker hub username and image name:

- `./build.sh`


## Docker pull
Or pull the one from Docker Hub
`docker pull gjovanov/mongo-log-api .`

## Docker run
```docker
docker run -d \
    --name mongo-log-api \
    --hostname mongo-log-api \
    --restart always \
    -p 8080:8080 \
    gjovanov/mongo-log-api
```

## Docker push
- `docker push gjovanov\mongo-log-api`

or use the release.sh script with your own docker hub username and image name:
- `./release.sh`