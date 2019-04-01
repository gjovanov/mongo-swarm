#!/bin/bash

set -e

echo "Installing Ansible..."
sudo apt-get update
sudo apt-get install -y software-properties-common
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt-get install -y --force-yes ansible
cp /vagrant/ansible/ansible.cfg /etc/ansible/ansible.cfg

#apt-get update -y
#apt-get install -y python-pip python-dev
#pip install ansible==1.9.2
#mkdir -p /etc/ansible
#touch /etc/ansible/hosts
#cp /vagrant/ansible/ansible.cfg /etc/ansible/ansible.cfg
#mkdir -p /etc/ansible/callback_plugins/
#cp /vagrant/ansible/plugins/human_log.py /etc/ansible/callback_plugins/human_log.py
