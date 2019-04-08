# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  if (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
    config.vm.synced_folder ".", "/vagrant", mount_options: ["dmode=700,fmode=600"]
    config.vm.synced_folder "/data", "/data", type: "rsync", rsync__auto: true, mount_options: ["dmode=777,fmode=777"]
  else
    config.vm.synced_folder ".", "/vagrant"
    config.vm.synced_folder "/data", "/data", type: "rsync", rsync__auto: true, mount_options: ["dmode=777,fmode=777"]
  end
  (1..2).each do |i|
    config.vm.define "manager-#{i.to_s.rjust(2, "0")}" do |d|
      d.vm.box = "ubuntu/xenial64"
      d.vm.network "private_network", ip: "10.100.192.2#{i.to_s.rjust(2, "0")}", netmask: "255.255.0.0"
      d.vm.hostname = "manager-#{i.to_s.rjust(2, "0")}"
      d.vm.provision :shell, inline: "sudo apt-get install -y python"
      d.vm.provider "virtualbox" do |v|
        v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        v.memory = 1024
      end
    end
  end
  (1..3).each do |i|
    config.vm.define "data-#{i.to_s.rjust(2, "0")}" do |d|
      d.vm.box = "ubuntu/xenial64"
      d.vm.network "private_network", ip: "10.100.193.2#{i.to_s.rjust(2, "0")}", netmask: "255.255.0.0"
      d.vm.hostname = "data-#{i.to_s.rjust(2, "0")}"
      d.vm.provision :shell, inline: "sudo apt-get install -y python"
      d.vm.provider "virtualbox" do |v|
        v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        v.memory = 1024
      end
    end
  end
  (1..3).each do |i|
    config.vm.define "config-#{i.to_s.rjust(2, "0")}" do |d|
      d.vm.box = "ubuntu/xenial64"
      d.vm.network "private_network", ip: "10.100.194.2#{i.to_s.rjust(2, "0")}", netmask: "255.255.0.0"
      d.vm.hostname = "config-#{i.to_s.rjust(2, "0")}"
      d.vm.provision :shell, inline: "sudo apt-get install -y python"
      d.vm.provider "virtualbox" do |v|
        v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        v.memory = 1024
      end
    end
  end
  (1..2).each do |i|
    config.vm.define "mongo-#{i.to_s.rjust(2, "0")}" do |d|
      d.vm.box = "ubuntu/xenial64"
      d.vm.network "private_network", ip: "10.100.195.2#{i.to_s.rjust(2, "0")}", netmask: "255.255.0.0"
      d.vm.hostname = "mongo-#{i.to_s.rjust(2, "0")}"
      d.vm.provision :shell, inline: "sudo apt-get install -y python"
      d.vm.provider "virtualbox" do |v|
        v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        v.memory = 1024
      end
    end
  end
  config.vm.define "cd" do |d|
    d.vm.box = "ubuntu/xenial64"
    d.vm.hostname = "cd"
    d.vm.network "private_network", ip: "10.100.198.200", netmask: "255.255.0.0"
    d.vm.provision :shell, path: "scripts/bootstrap_ansible.sh"
    d.vm.provision :shell, inline: "sudo /etc/init.d/networking restart"
    d.vm.provision :shell, inline: "PYTHONUNBUFFERED=1 ansible-playbook /vagrant/ansible/docker.yml -i /vagrant/ansible/hosts/cluster"
    d.vm.provision :shell, inline: "PYTHONUNBUFFERED=1 ansible-playbook /vagrant/ansible/swarm.yml -i /vagrant/ansible/hosts/cluster"
    d.vm.provision :shell, inline: "PYTHONUNBUFFERED=1 ansible-playbook /vagrant/ansible/mongo.yml -i /vagrant/ansible/hosts/cluster"
    d.vm.provider "virtualbox" do |v|
      v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]            
      v.memory = 1536
    end
  end
  if Vagrant.has_plugin?("vagrant-cachier")
    config.cache.scope = :box
    config.cache.synced_folder_opts =
        {
          owner: '_apt',
          group: '_apt'
        }
  end
  if Vagrant.has_plugin?("vagrant-vbguest")
    config.vbguest.auto_update = false
    config.vbguest.no_install = true
    config.vbguest.no_remote = true
  end
end
