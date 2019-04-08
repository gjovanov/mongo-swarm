#!/bin/bash

set -e

echo "Installing Ansible..."
sudo apt-get update
sudo apt-get install -y software-properties-common
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt-get install -y --force-yes ansible
cp /vagrant/ansible/ansible.cfg /etc/ansible/ansible.cfg
