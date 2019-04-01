# Installing Docker Engine

## Alpine
1. 
```bash
apk add --update docker \
  --repository "http://dl-cdn.alpinelinux.org/alpine/edge/community"
```


## Debian (Ubuntu)
1. `apt-get remove docker docker-engine docker.io lxc-docker`

2.
```bash
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

3. `apt-get install docker-ce`