FROM gjovanov/node-alpine-edge
LABEL maintainer="Goran Jovanov <goran.jovanov@gmail.com>"

# Version
ADD VERSION .

# Environment variables
ENV NODE_ENV production

# Install packages & git clone source code and build the application
RUN apk add --update --no-cache --virtual .build-deps \
  gcc g++ make git python && \
  apk add --no-cache vips vips-dev fftw-dev libc6-compat \
  --repository http://nl.alpinelinux.org/alpine/edge/testing/ \
  --repository http://nl.alpinelinux.org/alpine/edge/main && \
  cd / && \
  git clone https://github.com/gjovanov/mongo-swarm.git && \
  cd /mongo-swarm/app && \
  npm i pm2 -g && \
  npm i --production && \
  apk del .build-deps vips-dev fftw-dev && \
  rm -rf /var/cache/apk/*

WORKDIR /mongo-swarm/app

EXPOSE 8080

# Define the Run command
CMD ["npm", "run", "prod"]