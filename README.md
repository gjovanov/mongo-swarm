# Intro
Using this repo, you can create MongoDB Replicas/Shards inside a Docker Swarm with the following VMs:

- **cd**: central terminal VM via which software is installed on the other VMs (Docker, Swarm, Mogo etc)
- **manager-01, manager-02** - 2x VMs for Docker Managers (manager-01 being the primary)
- **data-01, data-02, data-03** - 3x VMs for storing the Mongo Data Instances (replicas/shards)
- **config-01, config-02, config-03** - 3x VMs for Mongo Config Instances
- **mongo-01, mongo-02** - 2x VMs for Mongo Instances (Router instances)

# Pre-requisites (Installed before)
- VirtualBox
- Vagrant

# Start the cluster of vms
`vagrant up` -> Start all VMs and install Docker on them

# Install Docker on all VMs
1. `vagrant ssh cd` -> login (ssh) to cd VM in order to bootstrap the Docker Swarm setup
2. `ansible-playbook /vagrant/ansible/docker.yml -i /vagrant/ansible/hosts/cluster`

# Initialize Docker Swarm
1. `vagrant ssh cd` -> login (ssh) to cd VM in order to bootstrap the Docker Swarm setup [skip this step if your are still logged in to cd VM]
2. `ansible-playbook /vagrant/ansible/swarm.yml -i /vagrant/ansible/hosts/cluster`

# Initialize Mongo Replicas/Shards
1. `vagrant ssh cd` -> login (ssh) to cd VM in order to bootstrap the Docker Swarm setup [skip this step if your are still logged in to cd VM]
2. `ansible-playbook /vagrant/ansible/mongo.yml -i /vagrant/ansible/hosts/cluster`