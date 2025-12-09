#!/bin/bash

sudo apt update -y
sudo apt upgrade -y

sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker ubuntu
rm get-docker.sh

sudo apt install -y docker-compose-plugin

mkdir -p ~/app-deploy
cd ~/app-deploy

aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

echo "EC2 initialization completed."
