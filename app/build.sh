set -ex
# SET THE FOLLOWING VARIABLES
USERNAME=gjovanov
IMAGE=mongo-log-api
docker build -t $USERNAME/$IMAGE:latest .