![MongoSwarm](MongoSwarm.png)
# Intro
Using this repo, you can automate the creation process of MongoDB ReplicaSets (optionally with Shards) deployed inside a Docker Swarm using Vagrant (VirtualBox) and Ansible to design the following architecture of VMs:

- **cd**: Continous Delivery VM via which software is installed on the other VMs (Docker, Docker Swarm, Mongo, App etc)
- **manager-01, manager-02** - 2x VMs for Docker Managers (manager-01 being the primary)
- **data-01, data-02, data-03** - 3x VMs for storing data in the Mongo Data Instances (Replica Sets/Shards)
- **config-01, config-02, config-03** - 3x VMs for Mongo Config Instances
- **mongo-01, mongo-02** - 2x VMs for Mongo Instances (Router instances)

# Pre-requisites (Installed before)
- VirtualBox
- Vagrant

In addition, you need to create the Shared folders between the Physical Host and your VMs that will be used as Docker Volumes:
- `/data/db-01` - data-01 Volume
- `/data/db-02` - data-02 Volume
- `/data/db-03` - data-03 Volume

- `/data/config-01` - config-01 Volume
- `/data/config-02` - config-02 Volume
- `/data/config-03` - config-03 Volume

e.g. `mkdir db-01 db-02 db-03 config-01 config-02 config-03 & chmod 666 db-* config-*`

# Start the Cluster of VMs
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
