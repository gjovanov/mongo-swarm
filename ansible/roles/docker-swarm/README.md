# Setting up Docker Swarm (Cluster)

1. `docker swarm init --advertise-addr 10.100.192.200` # 
2. Capturing the docker worker token in `<<docker_swarm_worker_token>>` using `docker swarm join-token worker`
3. Capturing the docker manager token in `<<docker_swarm_manager_token>>` using `docker swarm join-token manager`
4. Capturing the primary (first) manager address and port in `<<docker_swarm_manager_address>>` and `<<docker_swarm_port>>` respectively
5. For all workers `docker swarm join --token <<docker_swarm_worker_token>> <<docker_swarm_manager_address>><<docker_swarm_port>>`
6. For the remaining non-primary managers `docker swarm join --token <<docker_swarm_manager_token>> <<docker_swarm_manager_address>><<docker_swarm_port>>`