#!/bin/sh -e

server=flut
port=8200

if test -z "$GITHUB_SECRET"; then
  echo "No github secret set. Start with GITHUB_SECRET=<some secret>, or enter below."
  #LC_ALL=C tr -dc '[:alnum:]' < /dev/urandom | head -c32 | cat
  #echo ""
  read -r -p 'GitHub secret to use: ' GITHUB_SECRET
fi


ssh -M -S /tmp/ssh-ctrl-socket -fnNT -L 5000:localhost:5000 $server
onkill() { ssh -S /tmp/ssh-ctrl-socket -O exit $server; }
trap onkill SIGTERM

ssh -S /tmp/ssh-ctrl-socket -O check $server || exit 1
docker login localhost:5000 || exit 1

docker build -t docs-server --build-arg GITHUB_SECRET="$GITHUB_SECRET" .
docker tag docs-server localhost:5000/docs-server
docker push localhost:5000/docs-server
ssh -S /tmp/ssh-ctrl-socket -O exit $server
ssh $server 'sudo docker pull localhost:5000/docs-server'
ssh $server "sudo docker stop enduser-docs"
ssh $server "sudo docker rm enduser-docs"
ssh $server "sudo docker run -d --restart unless-stopped -p $port:80 --name enduser-docs localhost:5000/docs-server"
