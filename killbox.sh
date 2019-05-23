#!/bin/bash
## Destroys all Virtualbox VMs

# Drop running pids
while read -r pid; do
  kill -9 ${pid}
done <  <(pgrep -i vboxheadless)

# Destroy all machine
while read -r name; do
  VBoxManage unregistervm "$(echo $name |awk '{print$2}' |sed -e 's/.*{\([^}]\+\)}.*/\1/g')" --delete &> /dev/null
done < <(VBoxManage list vms)
